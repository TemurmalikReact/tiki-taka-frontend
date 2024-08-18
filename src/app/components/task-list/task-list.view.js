import './task-list.scss';
import { eventBus } from '../../../utils/event-bus';

export class TaskListView {
  tasks = [
    { id: 1, ism: "Abdumutalov Xurrambek", oyin: 2, gol: 3, assist: 4 },
    { id: 2, ism: "Muhammad Mabrur", oyin: 2, gol: 1, assist: 1 },
    { id: 3, ism: "Xolmirzayev Zafar", oyin: 2, gol: 3, assist: 2 },
    { id: 4, ism: "Zafarov Nurmuhammad", oyin: 2, gol: 6, assist: 2 },
    { id: 5, ism: "Ali", oyin: 2, gol: 3, assist: 1 },
    { id: 6, ism: "Bilol", oyin: 2, gol: 0, assist: 1 },
    { id: 7, ism: "Husainov Firdavs", oyin: 2, gol: 4, assist: 0 },
    { id: 8, ism: "Haydarov Asror", oyin: 2, gol: 2, assist: 1 },
    { id: 9, ism: "Umarkulov Akim", oyin: 2, gol: 2, assist: 1 },
    { id: 10, ism: "Mamadaliyev Jamshid", oyin: 2, gol: 2, assist: 4 },
    { id: 11, ism: "Qodirov Asadullo", oyin: 2, gol: 6, assist: 3 },
    { id: 12, ism: "Shodmonov Behruz", oyin: 2, gol: 1, assist: 0 },
    { id: 13, ism: "Jamoliddinov Fazliddin", oyin: 2, gol: 5, assist: 3 },
    { id: 14, ism: "Tursunaliyev Olim", oyin: 2, gol: 9, assist: 8 },
    { id: 15, ism: "Tillavoldiyev Nomonjon", oyin: 2, gol: 2, assist: 1 },
    { id: 16, ism: "Ergashev Zuhriddin", oyin: 2, gol: 5, assist: 2 },
    { id: 17, ism: "Muhtoriddinov Suhrobiddin", oyin: 2, gol: 4, assist: 1 },
    { id: 18, ism: "Raximov Shoxruh", oyin: 2, gol: 4, assist: 1 },
    { id: 19, ism: "Boburiy", oyin: 2, gol: 0, assist: 4 },
    { id: 20, ism: "Urmonov Davlatbek", oyin: 2, gol: 2, assist: 1 },
    { id: 21, ism: "Kamiljanov Habib", oyin: 2, gol: 1, assist: 0 },
    { id: 22, ism: "Tursunov Muhammadziyo", oyin: 2, gol: 3, assist: 8 },
    { id: 23, ism: "Jalilov Qobil", oyin: 2, gol: 2, assist: 1 },
    { id: 24, ism: "Xoshimov Abduqodir", oyin: 2, gol: 2, assist: 2 },
    { id: 25, ism: "Alimov Shahzod", oyin: 2, gol: 1, assist: 0 },
    { id: 26, ism: "Yuldashev Ayubxon", oyin: 2, gol: 6, assist: 1 },
    { id: 27, ism: "Abdukarimov Feruzbek", oyin: 2, gol: 1, assist: 4 },
    { id: 28, ism: "Dadaboyev Asadulloh", oyin: 2, gol: 5, assist: 4 },
    { id: 29, ism: "Saydalixonov Asilxon", oyin: 2, gol: 1, assist: 3 },
    { id: 30, ism: "Otajonov Ozodbek", oyin: 2, gol: 4, assist: 3 },
    { id: 31, ism: "Boykoziyev Kamronbek", oyin: 2, gol: 8, assist: 0 }
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
