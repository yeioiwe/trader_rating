import { ApiProperty } from '@nestjs/swagger';
import { AdminEntity } from 'apps/libs/db/entity/admin.entity';

export class AuthResponse {
    @ApiProperty({ type: String })
    authToken!: string;
}

export class AdminType extends AdminEntity {}
