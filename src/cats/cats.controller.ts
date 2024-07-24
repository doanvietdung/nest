import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UsePipes,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filter';
import { CreateCatDto } from './dtos/create-cat.dto';
import { createCatSchema } from './validations/create-cat.schema';
import { ValidationPipe } from './validations/zod-validation.pipe';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('create')
  @UseFilters(new HttpExceptionFilter())
  async create() {
    throw new BadRequestException('dsadsadasdsad');
  }

  @Post()
  async createBody(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
