import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { LoggerService } from 'src/common/logger/logger.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly logger: LoggerService,
  ) {
    this.logger.setContext(UserService.name);
  }

  async create(request: CreateUserDto): Promise<User> {
    const user: User = plainToInstance(User, request);
    const response = await this.userRepository.save(user);

    this.logger.debug(`create user ${response.name} is success`);

    return response;
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(username: string) {
    const result = await this.userRepository.findOne({
      where: {
        username: username,
      },
    });

    return result;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
