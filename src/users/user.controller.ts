import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Controller({
  path: 'user',
})
export class UserController {
  constructor(private readonly employeeService: UserService) {}

  @Get('info')
  public getByEmail(): Promise<UserEntity[]> {
    return this.employeeService.getAll();
  }
}
