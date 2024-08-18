import typeormConfig from '../typeorm.config';
import { DATABASE_v2 } from '../typeorm.config';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => typeormConfig.initialize(),
  },
  {
    provide: 'DATABASE_v2',
    useFactory: async () => DATABASE_v2.initialize(),
  },
];
