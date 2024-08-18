import { TaskListView } from './task-list.view';
import { TaskListModel } from './task-list.model';

export class TaskListController {

  view = new TaskListView();
  model = new TaskListModel();

  constructor() {
  }
}
