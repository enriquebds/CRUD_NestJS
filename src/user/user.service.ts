import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { IUser } from './interfaces/user.interfaces';
import { UserBodyDTO } from './dto/user.dto';
import { randomUUID } from 'crypto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaClient) {}

  async createUser(dto: UserBodyDTO): Promise<IUser> {
    const user: Prisma.UserCreateInput = {
      id: randomUUID(),
      ...dto,
      password: await bcrypt.hash(dto.password, 8),
    };

    const createUser = await this.prisma.user.create({
      data: user,
    });

    return {
      ...createUser,
      password: undefined,
    };
  }
}
