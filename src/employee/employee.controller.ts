import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeEntity } from './employee.entity';

@Controller({
  path: 'employee',
})
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('info')
  public getByEmail(): Promise<EmployeeEntity[]> {
    return this.employeeService.getAll();
  }
}
