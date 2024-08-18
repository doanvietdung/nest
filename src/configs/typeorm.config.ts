import { DataSource } from 'typeorm';
import { DATABASE_CONFIG } from './constant.config';
import { EmployeeEntity } from 'src/employee/employee.entity';
import { UserEntity } from 'src/users/user.entity';
export default new DataSource({
  name: 'test',
  type: 'mysql',
  host: DATABASE_CONFIG.host,
  port: DATABASE_CONFIG.port,
  username: DATABASE_CONFIG.username,
  password: DATABASE_CONFIG.password,
  database: DATABASE_CONFIG.database,
  entities: [EmployeeEntity],
  synchronize: false,
  logging: DATABASE_CONFIG.logging,
});

export const DATABASE_v2 = new DataSource({
  type: 'mysql',
  name: 'albumsConnection',
  host: DATABASE_CONFIG.host,
  port: DATABASE_CONFIG.port,
  username: DATABASE_CONFIG.username,
  password: DATABASE_CONFIG.password,
  database: 'test2',
  entities: [UserEntity],
  synchronize: false,
  logging: DATABASE_CONFIG.logging,
});
