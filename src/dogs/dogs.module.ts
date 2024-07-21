import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { CatsModule } from 'src/cats/cats.module';

@Module({
  imports: [DogsModule, CatsModule],
  controllers: [DogsController],
})
export class DogsModule {}
