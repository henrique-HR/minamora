const nao = document.querySelector('#nao')
const sim = document.querySelector('#sim')

const pedido = document.querySelector('main')


nao.addEventListener("mouseenter",()=>{
        const y = Math.floor(Math.random()*-90)
        const x = Math.floor(Math.random()*-90)  
            nao.style.top = `${-y}%`
            nao.style.left = `${-x}%`
            
})
sim.addEventListener('click',()=>{
    pedido.innerHTML = 'favorite'
    pedido.classList.add('material-symbols-outlined')
    pedido.classList.add('pulsar')
    
})
nao.addEventListener('click',()=>{
    const y = Math.floor(Math.random()*-90)
        const x = Math.floor(Math.random()*-90)  
            nao.style.top = `${-y}%`
            nao.style.left = `${-x}%`
})