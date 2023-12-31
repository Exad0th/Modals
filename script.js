'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const clsModal = document.querySelector('.close-modal');

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openModel = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i=0; i < showModal.length; i++){
    showModal[i].addEventListener('click',openModel)
}

clsModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);


document.addEventListener('keydown',function(event){
    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
        console.log("e")
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
})