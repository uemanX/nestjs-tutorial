import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.usersService.create(userData);
  }

  @Get()
  async findAll(): Promise<UserModel[]> {
    return this.usersService.users();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserModel> {
    return this.usersService.user({ id: Number(id) });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: { email?: string; name?: string },
  ): Promise<UserModel> {
    return this.usersService.update({ where: { id: Number(id) }, data });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<UserModel> {
    return this.usersService.remove({ id: Number(id) });
  }
}
