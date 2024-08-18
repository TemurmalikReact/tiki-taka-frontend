import { TaskModel } from "../task/task.model";
import { TaskView } from "../task/task.view";

export class TaskController {

  view = new TaskView();
  model = new TaskModel();

  constructor() {}
}

