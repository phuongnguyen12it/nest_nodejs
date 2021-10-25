// import { Module } from '@nestjs/common';
// import { TaskService } from './task.service';
// import { TaskController } from './task.controller';

// @Module({
//   providers: [TaskService],
//   controllers: [TaskController]
// })
// export class TaskModule {}
import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
