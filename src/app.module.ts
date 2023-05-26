import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserService } from './user/user.service';

@Module({
  imports: [UserService],
  controllers: [],
})
export class AppModule {}
