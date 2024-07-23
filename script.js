const placeHolders = document.querySelectorAll('.placeholder');
const item = document.querySelector('.item');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

placeHolders.forEach((place)=> {
    place.addEventListener('dragover', dragOver);
    place.addEventListener('dragenter', dragEnter);
    place.addEventListener('dragleave', dragLeave);
    place.addEventListener('drop', dragDrop);
});

function dragStart(event) {
    event.target.classList.add('hold');
    setTimeout(()=> { 
        event.target.classList.add('hide');
    }, 0);
};

function dragEnd(event) {
    event.target.className = 'item';    
};

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.target.classList.add('hovered');
}

function dragLeave(event) {
    event.target.classList.remove('hovered');
}

function dragDrop(event) {
    event.target.append(item);
    event.target.classList.remove('hovered');
}