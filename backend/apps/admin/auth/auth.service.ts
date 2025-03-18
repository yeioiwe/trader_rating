import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AdminEntity } from 'apps/libs/db/entity/admin.entity';
import { nanoid } from 'nanoid';
import { EntityManager } from 'typeorm';
import { AuthDto } from './auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private em: EntityManager,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) {}

    async onModuleInit() {
        const admin = await this.em.findOneBy(AdminEntity, {
            login: this.configService.get('ADMIN_ROOT_DEFAULT_LOGIN'),
        });
        if (!admin) {
            const pwd = nanoid(16);
            const password = await pwd;
            await this.em.save(AdminEntity, {
                login: this.configService.get('ADMIN_ROOT_DEFAULT_LOGIN'),
                password,
                root: true,
            });
            console.log(`root admin password is ${pwd}`);
        }
    }

    async login(dto: AuthDto) {
        const admin = await this.em.findOneBy(AdminEntity, { login: dto.login });
        if (!admin) throw new UnauthorizedException();

        if (admin.password !== dto.password) throw new UnauthorizedException();

        const payload = { id: admin.id, sub: { root: admin.root } };
        return {
            authToken: this.jwtService.sign(payload, {
                privateKey: this.configService.get('JWT_SECRET_TOKEN'),
            }),
        };
    }
}
