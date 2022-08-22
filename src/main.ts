// ! since i know this dom will be exist. 
// otherwise it could be nulll
const draggable_list = document.getElementById('draggable-list')!;
const check = document.getElementById('check')!;

const placesTovisitList=[
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
const listItmes=[] as HTMLLIElement[];

let dragStartIndex;

// Inser List Items into Dom
const createList=()=>{
    [...placesTovisitList]
        .map(a=>({value:a,sort:Math.random()}))  // make it random (shuffle)
        .sort((a,b)=>a.sort - b.sort)  // sort by sort(key | value)
        .map(a=>a.value) // remove sort and value 
        .map((person,index)=>{
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index',index.toString());
        listItem.innerHTML = `
            <span class="number" >${index +1 }</span>
            <div class="draggable" draggable="true" >
                <p class="person-name" >${person}</p>
                <i class="fas fa-grip-lines" ></i>
            </div>
        `
        listItmes.push(listItem);
        draggable_list.appendChild(listItem);
    })

}

createList();