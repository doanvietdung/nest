import { Controller, Get } from '@nestjs/common';
import { CatsService } from 'src/service/cat.service';
import { Cat } from 'src/entity/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
