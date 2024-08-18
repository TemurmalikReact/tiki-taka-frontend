import { AppView } from './app.view';
import { AppModel } from './app.model';

import { HeaderController } from '../header/header.controller';
import { PaginationController } from '../pagination/pagination.controller';
import { TaskListController } from '../task-list/task-list.controller';
import { TaskController } from '../task/task.controller';

export class AppController {
  view = new AppView();
  model = new AppModel();

  header = new HeaderController();
  taskList = new TaskListController();

  constructor() {}
}
