import { Column, Entity } from 'typeorm';
import { USER_CONST } from './employee.constant';
import { BaseEntity } from 'src/shared/database/base.entity';

@Entity({ name: USER_CONST.MODEL_NAME })
export class EmployeeEntity extends BaseEntity {
  @Column({ length: 255, unique: true })
  name: string;

  @Column({ length: 255, unique: true })
  address: string;
}
