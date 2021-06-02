
let blanc = document.getElementById("blanc")

let noir = document.getElementById("noir")

blanc.addEventListener('click',()=>{
    document.body.classList.add('light')
    document.body.classList.remove('dark')
})

noir.addEventListener('click',()=>{
    document.body.classList.remove('light')
    document.body.classList.add('dark')
})