let list = document.querySelector('.list');

let createBtn = document.querySelector('.create__btn');

createBtn.addEventListener('click', () => createNote('Загаловок', 'Основной текст'));

function createNote(title, text) {
    let noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.innerHTML = `<div class="note__head">
                    <p id="note__title">${title}</p>
                    <textarea id="note__title__input" class="hidden">${title}</textarea>
                    <div>
                        <button class="note-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="note-delete"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
                <p id="note__text">${text}</p>
                <textarea id="note__textarea" class="hidden">${text}</textarea>`;

    const editBtn = noteDiv.querySelector('.note-edit');
    const delBtn = noteDiv.querySelector('.note-delete');
    const titleP = noteDiv.querySelector('#note__title');
    const textP = noteDiv.querySelector('#note__text');
    const titleArea = noteDiv.querySelector('#note__title__input');
    const textArea = noteDiv.querySelector('#note__textarea');

    editBtn.addEventListener('click', (e) => {
        titleP.classList.toggle('hidden');
        textP.classList.toggle('hidden');
        titleArea.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    delBtn.addEventListener('click', (e) => {
        noteDiv.remove();
    });

    titleArea.addEventListener('input', (e) => {
        titleP.innerHTML = e.target.value;
    });

    textArea.addEventListener('input', (e) => {
        textP.innerHTML = e.target.value; 
    });


    list.appendChild(noteDiv);
};

//<div class="note">
//<div class="note__head">
//<p id="note__title">Загаловок</p>
//<textarea id="note__title" class="hidden"></textarea>
//<div>
//    <button class="note-edit"><i class="fa-solid fa-pen-to-square"></i></button>
//    <button class="note-delete"><i class="fa-solid fa-trash"></i></button>
//</div>
//</div>
//<p id="note__text">Основной текст</p>
//<textarea id="note__text" class="hidden"></textarea>
//</div>