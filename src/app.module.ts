import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

export const jwtSecret = "secret123"

@Module({
  imports: [AuthModule, PrismaModule, UserModule]
})
export class AppModule {}
