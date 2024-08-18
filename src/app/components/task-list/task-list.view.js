import './task-list.scss';
import { eventBus } from '../../../utils/event-bus';

export class TaskListView {
  tasks = [
    { id: 1, ism: "Abduqodir Xoshimov", oyin: 1, gol: 5, assist: 2 },
    { id: 2, ism: "Xurrambek Abdumutalov", oyin: 1, gol: 2, assist: 4 },
    { id: 3, ism: "Asadullo Qosirov", oyin: 1, gol: 5, assist: 1 },
    { id: 4, ism: "Jamshid Mamadaliyev", oyin: 1, gol: 2, assist: 4 },
    { id: 5, ism: "Akim Umarkulov", oyin: 1, gol: 1, assist: 2 },
    { id: 6, ism: "Asror Haydarov", oyin: 1, gol: 2, assist: 1 },
    { id: 7, ism: "Olim Tursunaliyev", oyin: 1, gol: 4, assist: 5 },
    { id: 8, ism: "Fazliddin Jamoliddinov", oyin: 1, gol: 2, assist: 1 },
    { id: 9, ism: "Firdavs Husainov", oyin: 1, gol: 4, assist: 0 }
  ];
  

  listSelector = 'task-list';
  childSelector = 'task';

  constructor() {
    this.render();
  }

  createTaskElement(taskData, i) {
    const task = document.createElement('div');
    
    task.classList.add(this.childSelector, 'task--row');
    task.setAttribute('task-id', taskData.id);

    task.innerHTML = `
      <div>${i + 1}</div>
      <div>${taskData.ism}</div>
      <div class="centered">${taskData.oyin}</div>
      <div class="centered">${taskData.gol}</div>
      <div class="centered">${taskData.assist}</div>
    `;

    return task;
  }

  render() {
    const taskList = document.createElement('div');
    taskList.innerHTML = `
      <div class="task">
        <div class="task--header">
          <div style="font-size: 12px !important;">№</div>
          <div>Ism/Familiya</div>
          <div class="centered">O'yin</div>
          <div class="centered">Gol</div>
          <div class="centered">Assist</div>
        </div>
        <div class="task--container"></div>
      </div>
    `;

    document.getElementById(this.listSelector).appendChild(taskList);

    // Append Player
    const tbody = document.querySelector('.task--container');
    this.tasks.sort((a, b) => {
      const totalA = a.gol + a.assist;
      const totalB = b.gol + b.assist;
      
      if (totalA === totalB) {
        return b.gol - a.gol; // Goal = Assist
      }
      
      return totalB - totalA; // Goal + Assist
    }).forEach((taskData, i) => {
      const taskElement = this.createTaskElement(taskData, i);
      tbody.appendChild(taskElement);
    });
  }
}
