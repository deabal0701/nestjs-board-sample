import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '49.247.206.104',
  port: 3306,
  username: 'node',
  password: 'node',
  database: 'node',
  entities: [__dirname + '/../**/*.entity.{js.ts}'],
  synchronize: true,
};
