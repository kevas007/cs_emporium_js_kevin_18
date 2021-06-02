let modalBtn = document.querySelector('.modal-btn')


let modalBg =document.querySelector('.modal-bg')

let modalBg2 =document.querySelector('.modal-bg2')

let modalClose1 = document.querySelector('.modal-close')

let modalClose2 = document.querySelector('.modal-close2')

let con = document.querySelector('.st1')

let con2 = document.querySelector('.st2')


con2.addEventListener('click',()=>{
    modalBg.classList.add('bg-active')   
    modalBg2.classList.remove('bg-active')
})
con.addEventListener('click',()=>{
    modalBg2.classList.add('bg-active')
    modalBg.classList.remove('bg-active')
})
modalBtn.addEventListener('click',()=>{
    modalBg.classList.add('bg-active')
})
modalClose1 .addEventListener('click', ()=>{
    modalBg.classList.remove('bg-active')
})
modalClose2.addEventListener('click', ()=>{
    modalBg2.classList.remove('bg-active')
})