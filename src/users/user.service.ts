import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/database/base.service';

@Injectable()
export class UserService extends BaseService<UserEntity> {
  constructor(
    @InjectRepository(UserEntity, 'albumsConnection')
    private readonly EmployeeEntityRepository: Repository<UserEntity>,
  ) {
    super(EmployeeEntityRepository);
  }

  async getAll(): Promise<UserEntity[]> {
    return await this.EmployeeEntityRepository.find({
      take: 4,
      skip: 0,
    });
  }
}
