import { Module } from '@nestjs/common';
import { CategoryModule } from './categories/category.module';
import { TaskModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [TaskModule, CategoryModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'Tasks-management',
      autoLoadEntities: true,
      synchronize: true
    }), AuthModule],
})
export class AppModule { }