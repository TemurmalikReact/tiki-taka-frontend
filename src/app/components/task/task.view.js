import './task.scss';

export class TaskView {
  selector = 'task';
  tasks = [
    { id: 1, ism: "Xoshimov", familiya: "Abduqodir", oyin: 1, gol: 5, assist: 2, sariq: 0, qizil: 0 },
    { id: 2, ism: "Abdumutalov", familiya: "Xurrambek", oyin: 1, gol: 2, assist: 4, sariq: 0, qizil: 0 },
    { id: 3, ism: "Qosirov", familiya: "Asadullo", oyin: 1, gol: 5, assist: 1, sariq: 0, qizil: 0 },
    { id: 4, ism: "Mamadaliyev", familiya: "Jamshid", oyin: 1, gol: 2, assist: 4, sariq: 0, qizil: 0 },
    { id: 5, ism: "Umarkulov", familiya: "Akim", oyin: 1, gol: 1, assist: 2, sariq: 0, qizil: 0 },
    { id: 6, ism: "Haydarov", familiya: "Asror", oyin: 1, gol: 2, assist: 1, sariq: 0, qizil: 0 },
    { id: 7, ism: "Tursunaliyev", familiya: "Olim", oyin: 1, gol: 4, assist: 5, sariq: 0, qizil: 0 },
    { id: 8, ism: "Jamoliddinov", familiya: "Fazliddin", oyin: 1, gol: 2, assist: 1, sariq: 0, qizil: 0 },
    { id: 9, ism: "Husainov", familiya: "Firdavs", oyin: 1, gol: 4, assist: 0, sariq: 0, qizil: 0 }
  ]
  
  
  constructor() {
    this.render();
  }

  createTaskElement(taskData) {
    const task = document.createElement('tr');
    task.classList.add(this.selector, 'task--row');
    task.setAttribute('task-id', taskData.id);
    task.innerHTML = `
      <td class="task-column">
        <span>${taskData.ism}</span>
        <i class="task-column--icon fa-solid fa-up-right-and-down-left-from-center"></i>
      </td>
      <td class="description-column">${taskData.familiya}</td>
      <td class="creation-date-column"> <b>${taskData.oyin}</b></td>
      <td class="due-date-column">${taskData.gol}</td>
      <td class="due-date-column">${taskData.assist}</td>
      <td class="priority-column"><div class="priority">${taskData.sariq}</div></td>
      <td class="status-column"><div class="status">${taskData.qizil}</div></td>
    `;

    // Optionally, add event listeners here
    // task.addEventListener('click', () => {
    //   taskClickHandler();
    // });

    return task;
  }

  render() {
    const tbody = document.querySelector('.task-list tbody');
    this.tasks.sort((a, b) => {
      const totalA = a.gol + a.assist;
      const totalB = b.gol + b.assist;
      
      if (totalA === totalB) {
        return b.gol - a.gol; // Goal = Assist
      }
      
      return totalB - totalA; // Goal + Assist
    }).forEach(taskData => {
      const taskElement = this.createTaskElement(taskData);
      tbody.appendChild(taskElement);
    });
  }  
  
}
