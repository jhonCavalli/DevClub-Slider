let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItemOnClick('next')
btnBack.onclick = () => moveItemOnClick('back')

function moveItemOnClick(type) {
    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')


    if(type === 'next') {
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
    } else {
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumbItems[listItems.length - 1])
        
    }
}
