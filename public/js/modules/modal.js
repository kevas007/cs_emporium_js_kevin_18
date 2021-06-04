let modalBtn = document.querySelector('.modal-btn')


let modalBg =document.querySelector('.modal-bg')

let modalBg2 =document.querySelector('.modal-bg2')

let modalClose1 = document.querySelector('.modal-close')

let modalClose2 = document.querySelector('.modal-close2')

let con = document.querySelector('.st1')

let con2 = document.querySelector('.st2')


con2.addEventListener('click',()=>{
    modalBg.classList.add('bg-active')
    modalBg.style.transition="0.5s ease-in"
    modalBg2.classList.remove('bg-active')
    modalBg2.style.transition="0.5s ease-out"
})
con.addEventListener('click',()=>{
    modalBg2.classList.add('bg-active')
    modalBg2.style.transition="0.5s ease-in"
    modalBg.classList.remove('bg-active')
    modalBg.style.transition="0.5s ease-out"
})

modalBtn.addEventListener('click',()=>{
    modalBg.classList.add('bg-active')
    modalBg.style.transition="0.5s ease-in"
})
modalClose1 .addEventListener('click', ()=>{
    modalBg.classList.remove('bg-active')
    modalBg.style.transition="0.5s ease-in"
})
modalClose2.addEventListener('click', ()=>{
    modalBg2.classList.remove('bg-active')
    modalBg2.style.transition="0.5s ease-in"
})