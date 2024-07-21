import { Controller, Get } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { Cat } from 'src/cats/interfaces/cats.interface';

@Controller('dogs')
export class DogsController {
  constructor(private readonly catService: CatsService) {}
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }
}
