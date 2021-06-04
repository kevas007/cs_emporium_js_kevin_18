
let blanc = document.getElementById("blanc")

let noir = document.getElementById("noir")

blanc.addEventListener('click',()=>{
    document.body.classList.add('light')
    document.body.classList.remove('dark')
    document.body.style.transition=" all 1s ease-in-out"
})

noir.addEventListener('click',()=>{
    document.body.classList.remove('light')
    document.body.classList.add('dark')
    document.body.style.transition=" all 1s ease-in-out"
})