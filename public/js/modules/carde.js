let thor = document.querySelectorAll('.thor')
thor = Array.from(thor)

thor.forEach(element => {
    element.addEventListener('mouseover',()=>{
        element.classList.add('loky');
    })
    element.addEventListener('mouseout',()=>{
        element.classList.remove('loky');
        element.style.transition = "0.5s ease-out";
    })
});


let mgc = document.querySelectorAll('.imgCar');

mgc = Array.from(mgc)

mgc.forEach(element => {
    element.addEventListener('mouseover',()=>{
        element.classList.add('mgc');
    })
    element.addEventListener('mouseout',()=>{
        element.classList.remove('mgc');
        element.style.transition = "0.5s ease-out";
    })
});

let bg = document.querySelectorAll('.bg-dark ')[0]
console.log(bg);
let bg2 = document.querySelectorAll('.bg1');
bg2 = Array.from(bg2);

bg2.forEach(element => {
    element.addEventListener('mouseover',()=>{
        element.classList.add('hove');
        bg.classList.add('bto');
        element.style.transition = "1s ease-in";
    })
    element.addEventListener('mouseout',()=>{
        element.classList.remove('hove');
        bg.classList.remove('bto')
        element.style.transition = "1s ease-out";
    })
});