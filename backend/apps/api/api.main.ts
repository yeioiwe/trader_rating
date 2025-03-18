import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ApiModule } from './api.module';

async function bootstrap() {
    const app = await NestFactory.create(ApiModule);
    app.enableCors();

    const prefix = '/api/v1';
    const config = app.get(ConfigService);
    const port = config.get('API_LISTEN_PORT');

    app.setGlobalPrefix(prefix);
    if (config.get('NODE_ENV') !== 'production') {
        const doc = new DocumentBuilder()
            .setTitle('Project API')
            .setVersion('1.0')
            .addServer(prefix)
            .addBearerAuth()
            .build();
        const docApi = SwaggerModule.createDocument(app, doc, {
            include: [ApiModule],
            deepScanRoutes: true,
            ignoreGlobalPrefix: true,
            operationIdFactory(controllerKey, methodKey) {
                const ctrl = controllerKey.endsWith('Controller') ? controllerKey.slice(0, -10) : controllerKey;
                return ctrl[0].toLowerCase() + ctrl.slice(1) + methodKey[0].toUpperCase() + methodKey.slice(1);
            },
        });
        SwaggerModule.setup(prefix, app, docApi);
    }
    console.log(`Listening on http://127.0.0.1:${port}${prefix}`);
    await app.listen(port);
}

bootstrap();
