/* eslint-disable @typescript-eslint/ban-types */
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { CreateCatDto } from './create-cat.schema';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    console.log(metatype);
    console.log(value);

    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object: CreateCatDto = plainToInstance(metatype, value);
    console.log(object.name);

    console.log(object);

    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    console.log(metatype);

    const types: Function[] = [String, Boolean, Number, Array, Object];
    console.log(types);
    console.log(!types.includes(metatype));

    return !types.includes(metatype);
  }
}
