import './task-list.scss';
import { eventBus } from '../../../utils/event-bus';

export class TaskListView {
  tasks = [
    { id: 1, ism: "Abdumutalov Xurrambek", oyin: 2, gol: 3, assist: 4 },
    { id: 2, ism: "Muhammad Mabrur", oyin: 2, gol: 1, assist: 1 },
    { id: 3, ism: "Xolmirzayev Zafar", oyin: 3, gol: 6, assist: 1 },
    { id: 4, ism: "Zafarov Nurmuhammad", oyin: 4, gol: 12, assist: 6 },
    { id: 5, ism: "Ali", oyin: 2, gol: 3, assist: 1 },
    { id: 6, ism: "Bilol", oyin: 2, gol: 0, assist: 1 },
    { id: 7, ism: "Husainov Firdavs", oyin: 2, gol: 4, assist: 0 },
    { id: 8, ism: "Haydarov Asror", oyin: 2, gol: 2, assist: 1 },
    { id: 9, ism: "Umarkulov Akim", oyin: 2, gol: 2, assist: 1 },
    { id: 10, ism: "Mamadaliyev Jamshid", oyin: 2, gol: 2, assist: 4 },
    { id: 11, ism: "Qodirov Asadullo", oyin: 3, gol: 8, assist: 3 },
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
    { id: 22, ism: "Tursunov Muhammadziyo", oyin: 3, gol: 10, assist: 15 },
    { id: 23, ism: "Jalilov Qobil", oyin: 3, gol: 5, assist: 1 },
    { id: 24, ism: "Xoshimov Abduqodir", oyin: 2, gol: 2, assist: 2 },
    { id: 25, ism: "Alimov Shahzod", oyin: 2, gol: 1, assist: 0 },
    { id: 26, ism: "Yuldashev Ayubxon", oyin: 3, gol: 9, assist: 3 },
    { id: 27, ism: "Abdukarimov Feruzbek", oyin: 3, gol: 4, assist: 5 },
    { id: 28, ism: "Dadaboyev Asadulloh", oyin: 3, gol: 8, assist: 8 },
    { id: 29, ism: "Saydalixonov Asilxon", oyin: 3, gol: 1, assist: 4 },
    { id: 30, ism: "Otajonov Ozodbek", oyin: 2, gol: 4, assist: 3 },
    { id: 31, ism: "Boyqo'ziyev Kamronbek", oyin: 2, gol: 8, assist: 0 },
{ id: 32, ism: "Juraev Shohruh", oyin: 1, gol: 5, assist: 3 },
{ id: 33, ism: "Soyibjonov Usmon", oyin: 1, gol: 1, assist: 2 },
{ id: 34, ism: "Mahmudov G’oibnazar", oyin: 2, gol: 1, assist: 2 },
{ id: 35, ism: "Raxmonberdiyev Jo’rabek", oyin: 1, gol: 2, assist: 1 },
  { id: 36, ism: "Хабибуллаев Диёрбек", oyin: 1, gol: 1, assist: 0 },
  { id: 37, ism: "Мамасидиков Бекмурод", oyin: 1, gol: 0, assist: 1 },
  { id: 38, ism: "Одилов Шерзод", oyin: 1, gol: 1, assist: 2 },
  { id: 39, ism: "Зохидов Мухаммадкодир", oyin: 1, gol: 1, assist: 0 },
  { id: 40, ism: "Zoyirjonov Zohidjon", oyin: 1, gol: 3, assist: 0 },
  { id: 41, ism: "To'xtasinov Erkinjon", oyin: 1, gol: 5, assist: 4 },
  { id: 42, ism: "To'xtasinov Firdavs", oyin: 1, gol: 3, assist: 2 },
  { id: 43, ism: "Djurayev Sanjar", oyin: 1, gol: 0, assist: 0 },
  { id: 44, ism: "Qochqoraliyev Samandar", oyin: 1, gol: 0, assist: 1 },
  { id: 45, ism: "Xabibullayev Saidamirxon", oyin: 1, gol: 3, assist: 2 },
  { id: 46, ism: "Нурматов Умиджон", oyin: 1, gol: 0, assist: 0 },
  { id: 47, ism: "Tursunov Ayubxon", oyin: 1, gol: 2, assist: 3 }
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
