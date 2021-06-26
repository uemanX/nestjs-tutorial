import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const prisma = new PrismaClient();
    try {
      await prisma.user.create({
        data: {
          name: 'Alice',
          email: 'alice@prisma.io',
        },
      });
      console.log('create finished.');
    } catch (error) {
      console.error(error);
    } finally {
      console.info('Service#create');
      prisma.$disconnect();
    }
  }

  async findAll(): Promise<User[]> {
    const prisma = new PrismaClient({
      log: ['query'],
    });
    try {
      const allUsers = await prisma.user.findMany();
      console.log(allUsers);

      console.log('allUsers_finished.');

      const users: User[] = [
        {
          firstname: 'uema',
          lastname: 'test',
          age: 33,
        },
      ];

      return users;
    } catch (error) {
      console.error(error);
    } finally {
      console.info('Service#findAll');
      prisma.$disconnect();
    }
  }

  findOne(id: number) {
    console.log(`id: ${id}`);
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const prisma = new PrismaClient();
    try {
      await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          name: 'Uema',
        },
      });
      console.log('update finished.');
    } catch (error) {
      console.error(error);
    } finally {
      console.info('Service#update');
      prisma.$disconnect();
    }
  }

  async remove(id: number) {
    const prisma = new PrismaClient();
    try {
      await prisma.user.delete({
        where: {
          id: id,
        },
      });
      console.log('delete finished.');
    } catch (error) {
      console.error(error);
    } finally {
      console.info('Service#delete');
      prisma.$disconnect();
    }
  }
}
