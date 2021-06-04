
let nav = document.querySelector('ul');

window.addEventListener('scroll',()=>{
    if(window.scrollY > 60){
        nav.classList.add('anim-nav');
        nav.style.transition= "0.5s esae-in"
    }
    else{
        nav.classList.remove('anim-nav');
        nav.style.transition= "0.5s esae-out"
    }
})

let bu = document.getElementsByClassName('toggle-button')[0];


let navlinks = document.getElementsByClassName('navbar-nav')[0]

bu.addEventListener('click',()=>{
    navlinks.classList.toggle('active')
    navlinks.style.transition = "1s ease-in-out";
})



let effe1 = document.querySelector('.effet1')

effe1.addEventListener('mouseover',()=>{
    effe1.classList.add('mouve')
})

effe1.addEventListener('mouseout',()=>{
    effe1.style.transition = '1s ease-in'
    effe1.classList.remove('mouve')
})



let effe2 = document.querySelector('.effet2')

effe2.addEventListener('mouseover',()=>{
    effe2.classList.add('mouve')
})

effe2.addEventListener('mouseout',()=>{
    effe2.classList.remove('mouve')
    effe2.style.transition = '1s ease-in'
})



let effe3 = document.querySelector('.effet3')

effe3.addEventListener('mouseover',()=>{
    effe3.classList.add('mouve')
})

effe3.addEventListener('mouseout',()=>{
    effe3.classList.remove('mouve')
    effe3.style.transition = '1s ease-in'
})