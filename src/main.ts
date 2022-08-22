// ! since i know this dom will be exist. 
// otherwise it could be nulll
const draggable_list = document.getElementById('draggable-list')!;
const check = document.getElementById('check')!;

const placesTovisitList = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page'
]

// Store List Items
//  HTMLLIElement Dom ARRAY
const listItmes = [] as HTMLLIElement[];

let dragStartIndex: number;

// Inser List Items into Dom
const createList = () => {
  [...placesTovisitList]
    .map(a => ({ value: a, sort: Math.random() }))  // make it random (shuffle)
    .sort((a, b) => a.sort - b.sort)  // sort by sort(key | value)
    .map(a => a.value) // remove sort and value 
    .map((person, index) => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index.toString());
      listItem.innerHTML = `
      <span class="number">${index}</span>
      <div class="draggable" draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
      `
      listItmes.push(listItem);
      draggable_list.appendChild(listItem);
    })
  eventCallback();
}

const eventCallback = () => {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  });
  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
}


// callback FN 
const dragStart = (e: Event) => {
  const target = e.target as HTMLElement;
  const liElement = target.closest('li'); // return closest Element (web api [element])

  if (!liElement) return; // li element could be null

  const number = Number(liElement.getAttribute('data-index'));
  dragStartIndex = number;
}
const dragOver = (e: Event) => {
  e.preventDefault();
}
const dragDrop = (e: Event) => {
  const target = e.target as HTMLElement;
  const liElement = target.closest('li');

  if (!liElement) return; // li element could be null

  const dragEndIndex = Number(liElement.getAttribute('data-index'));
  swapItems(dragStartIndex, dragEndIndex);
  target.classList.remove('over');
}
const dragEnter = (e: Event): void => {
  const target = e.target as HTMLElement;
  console.log(target, "enter");
  target.classList.add('over');
}
const dragLeave = (e: Event) => {
  const target = e.target as HTMLElement;
  console.log(target, "leave")
  target.classList.remove("over")
}

const swapItems = (fromIndex: number, toIndex: number) => {
  const itemOne = listItmes[fromIndex].querySelector('.draggable')!; // since it could be null
  const itemTwo = listItmes[toIndex].querySelector('.draggable')!;
  listItmes[fromIndex].appendChild(itemTwo);
  listItmes[toIndex].appendChild(itemOne);
}


createList();