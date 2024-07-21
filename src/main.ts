import {
  NestFactory,
  HttpAdapterHost,
  AbstractHttpAdapter,
} from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './exceptions/all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const httpAdapter = app.getHttpAdapter();
  const httpAdapterHost = new HttpAdapterHost();
  httpAdapterHost.httpAdapter = httpAdapter as AbstractHttpAdapter;

  app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost));
}
bootstrap();
