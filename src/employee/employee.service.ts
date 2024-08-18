import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeEntity } from './employee.entity';
import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/database/base.service';

@Injectable()
export class EmployeeService extends BaseService<EmployeeEntity> {
  constructor(
    @InjectRepository(EmployeeEntity, 'test')
    private readonly EmployeeEntityRepository: Repository<EmployeeEntity>,
  ) {
    super(EmployeeEntityRepository);
  }

  async getAll(): Promise<EmployeeEntity[]> {
    return await this.EmployeeEntityRepository.find({
      take: 4,
      skip: 1,
    });
  }
}
