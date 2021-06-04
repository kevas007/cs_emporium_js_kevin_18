let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');


btn1.addEventListener('click',()=>{
    btn1.classList.add('change')
    btn2.classList.remove('change')
    btn3.classList.remove('change')
    btn4.classList.remove('change')
})
btn2.addEventListener('click',()=>{
    btn2.classList.add('change')
    btn1.classList.remove('change')
    btn3.classList.remove('change')
    btn4.classList.remove('change')
})
btn3.addEventListener('click',()=>{
    btn3.classList.add('change')
    btn2.classList.remove('change')
    btn1.classList.remove('change')
    btn4.classList.remove('change')
})
btn4.addEventListener('click',()=>{
    btn4.classList.add('change')
    btn2.classList.remove('change')
    btn3.classList.remove('change')
    btn1.classList.remove('change')
})

let tabtn=[btn1,btn2,btn3,btn4]
//Recuperation des slides
let slide1 = document.getElementsByClassName('slide1')[0]
let slide2 = document.getElementsByClassName('slide2')[0]
let slide3 = document.getElementsByClassName('slide3')[0]
let slide4 = document.getElementsByClassName('slide4')[0]

let slideTab=[slide1, slide2, slide3, slide4]



slide1.classList.add('active')
slide2.classList.remove('active')
slide3.classList.remove('active')
slide4.classList.remove('active')

tabtn.forEach(element => {
    element.addEventListener('click',()=>{
        tabtn.forEach(e => {
            e.classList.remove('change')
        })
        switch (element.id) {
            case 'btn1':
                slide2.classList.remove('active')
                slide3.classList.remove('active')
                slide4.classList.remove('active')
                slide1.classList.add('active')
            break;
            case 'btn2':
                slide1.classList.remove('active')
                slide3.classList.remove('active')
                slide4.classList.remove('active')
                slide2.classList.add('active')
            break;
            case 'btn3':
                slide1.classList.remove('active')
                slide2.classList.remove('active')
                slide4.classList.remove('active')
                slide3.classList.add('active')
            break;
            case 'btn4':
                slide1.classList.remove('active')
                slide2.classList.remove('active')
                slide3.classList.remove('active')
                slide4.classList.add('active')
            break;
        
            default:
                console.log("Error");
            break;
        }  
    })
}); 

let i = 0
window.setInterval(() => {
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    let btn4 = document.getElementById('btn4');
    
    
    btn1.addEventListener('click',()=>{
        btn1.classList.add('change')
        btn2.classList.remove('change')
        btn3.classList.remove('change')
        btn4.classList.remove('change')
        btn1.classList.add("carou-active")
        btn2.classList.remove('carou-active')
        btn3.classList.remove('carou-active')
        btn4.classList.remove('carou-active')
        
    })
    btn2.addEventListener('click',()=>{
        btn2.classList.add('change')
        btn1.classList.remove('change')
        btn3.classList.remove('change')
        btn4.classList.remove('change')

        btn2.classList.add("carou-active")
        btn2.classList.remove('carou-active')
        btn3.classList.remove('carou-active')
        btn4.classList.remove('carou-active')
    })
    btn3.addEventListener('click',()=>{
        btn3.classList.add('change')
        btn2.classList.remove('change')
        btn1.classList.remove('change')
        btn4.classList.remove('change')

        btn3.classList.add("carou-active")
        btn2.classList.remove('carou-active')
        btn3.classList.remove('carou-active')
        btn4.classList.remove('carou-active')
    })
    btn4.addEventListener('click',()=>{
        btn4.classList.add('change')
        btn2.classList.remove('change')
        btn3.classList.remove('change')
        btn1.classList.remove('change')

        btn4.classList.add("carou-active")
        btn2.classList.remove('carou-active')
        btn3.classList.remove('carou-active')
        btn4.classList.remove('carou-active')
    })


    if (slide1.classList.contains("active") || slide2.classList.contains("active") || slide3.classList.contains("active") || slide4.classList.contains("active")) {
        slide1.classList.remove("active");
        slide2.classList.remove("active");
        slide3.classList.remove("active");
        slide4.classList.remove("active");
        btn1.classList.remove("carou-active")
        btn2.classList.remove('carou-active')
        btn3.classList.remove('carou-active')
        btn4.classList.remove('carou-active')
        if (i == 4) {
            i = 0;
        }
        slideTab[i].classList.add("active");
        slideTab[i].classList.add("carou-active");
        tabtn.forEach(e => {
            e.classList.remove('change')
        })
        tabtn[i].classList.add('change');
        i++;
    }
}, 2000);