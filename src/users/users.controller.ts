import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
import type { ILoginUser } from './types';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  async getUsers() {
    const users = await this.usersService.users({});
    return users;
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const user = await this.usersService.user({ id: Number(id) });
    return user;
  }

  @Post()
  async createUser(@Body() data: Prisma.UserCreateInput) {
    const user = await this.usersService.createUser(data);
    return user;
  }

  @Post('login')
  async loginUser(@Body() data: ILoginUser) {
    const response = await this.usersService.authenicateUser(data);
    return response;
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: Prisma.UserUpdateInput,
  ) {
    const user = await this.usersService.updateUser({
      where: { id: Number(id) },
      data,
    });
    return user;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const user = await this.usersService.deleteUser({ id: Number(id) });
    return user;
  }
}
