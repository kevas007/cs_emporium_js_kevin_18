
let nav = document.querySelector('ul');

window.addEventListener('scroll',()=>{
    if(window.scrollY > 60){
        nav.classList.add('anim-nav');
        
    }
    else{
        nav.classList.remove('anim-nav');
    }
})

let bu = document.getElementsByClassName('toggle-button')[0];


let navlinks = document.getElementsByClassName('navbar-nav')[0]

bu.addEventListener('click',()=>{
    navlinks.classList.toggle('active')
})