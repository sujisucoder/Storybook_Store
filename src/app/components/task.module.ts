import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import TaskComponent from './task/task.component';
import TasklistComponent from './tasklist/tasklist.component';
import { TasksState } from '../state/task.state';
import PureTasklistComponent from './pure-tasklist/pure-tasklist.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [TaskComponent, TasklistComponent],
  declarations: [TaskComponent, TasklistComponent],
  providers: [],
})
export class TaskModule {}
