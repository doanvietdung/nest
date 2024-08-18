import { Column, Entity } from 'typeorm';
import { USER_CONST } from './user.constant';
import { BaseEntity } from 'src/shared/database/base.entity';

@Entity({ name: USER_CONST.MODEL_NAME })
export class UserEntity extends BaseEntity {
  @Column()
  age: number;
}
