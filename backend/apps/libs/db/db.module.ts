import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonEnv } from '../tools/common.env';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (config: ConfigService<CommonEnv>) => {
                return {
                    type: 'mysql',
                    url: config.get('DB_URL'),
                    synchronize: config.get('DB_SYNC'),
                    autoLoadEntities: true,
                    maxQueryExecutionTime: 500,
                };
            },
            inject: [ConfigService],
        }),
    ],
})
export class DbModule {}
