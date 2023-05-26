import {
  Post,
  Get,
  Patch,
  Delete,
  Req,
  Res,
  Body,
  Controller,
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Res() res: Response, @Body() body) {
    const createdUser = await this.userService.createUser(body);

    return res.status(201).json(createdUser);
  }
}
