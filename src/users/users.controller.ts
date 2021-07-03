import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel } from '@prisma/client';
import { ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() data: CreateUserDto): Promise<UserModel> {
    return this.usersService.create(data);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'ok baby' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async findAll(): Promise<UserModel[]> {
    return this.usersService.users();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<UserModel> {
    return this.usersService.fineOne({ id });
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateUserDto,
  ): Promise<UserModel> {
    return this.usersService.update({ where: { id }, data });
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<UserModel> {
    return this.usersService.remove({ id });
  }
}
