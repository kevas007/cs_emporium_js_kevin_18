
let nav = document.querySelector('ul');

window.addEventListener('scroll',()=>{
    if(window.scrollY > 60){
        nav.classList.add('anim-nav');
        
    }
    else{
        nav.classList.remove('anim-nav');
    }
})