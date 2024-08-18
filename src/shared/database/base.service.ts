import {
  BadGatewayException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { FindOptionsWhere, Not, Repository, UpdateResult } from 'typeorm';

export interface IBaseService<T> {
  create(entity: T): Promise<T>;
  getAll(): Promise<T[]>;
  get(
    id: string | number | string[] | number[] | FindOptionsWhere<T>,
  ): Promise<T>;
  update(id: string | number, dto: T): Promise<UpdateResult>;
  delete(id: string | number): Promise<boolean>;
  softDelete(id: string | number): Promise<boolean>;
}

export class BaseService<T> implements IBaseService<T> {
  constructor(private readonly genericRepository: Repository<T>) {}

  create(entity: any): Promise<T> {
    return this.genericRepository.save(entity);
  }

  getAll(): Promise<T[]> {
    try {
      return <Promise<T[]>>this.genericRepository.find();
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  get(
    id: string | number | string[] | number[] | FindOptionsWhere<T>,
  ): Promise<T> {
    try {
      const where = { id } as FindOptionsWhere<any>;
      return <Promise<T>>this.genericRepository.findOneBy(where);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async delete(
    id: string | number | string[] | number[] | FindOptionsWhere<T>,
  ): Promise<boolean> {
    try {
      await this.genericRepository.delete(id);
      return true;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async softDelete(
    id: string | number | string[] | number[] | FindOptionsWhere<T>,
  ): Promise<boolean> {
    try {
      await this.genericRepository.softDelete(id);
      return true;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async update(
    id: string | number,
    entity: any,
    uniqueParams?: any,
  ): Promise<UpdateResult> {
    try {
      const where = { id } as FindOptionsWhere<any>;
      const found = await this.genericRepository.findOneBy(where);
      if (!found) {
        throw new NotFoundException(`Cannot find data with id: ${id}`);
      }
      if (uniqueParams) {
        const options = {
          ...uniqueParams,
          id: Not(id),
        };
        const exist = await this.genericRepository.countBy(options);
        if (exist) {
          throw new BadRequestException(`exist record in the database`);
        }
      }

      return this.genericRepository.update(id, entity);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
