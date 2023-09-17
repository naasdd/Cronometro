var ms = 0
var s = 0
var m = 0
let tempo = document.getElementById('timer')
let iniciar = document.getElementById('inicio')
let zerar = document.getElementById('zerar')
let pausar = document.getElementById('pausar')
let pausado = false
let contando = false

iniciar.onclick = function(){
    
    if(contando == false && pausado == false)
    {
        contando = true
        contagem = setInterval(() => {
            ms++
            if (ms == 100) {
                ms = 0
                s++
            }
            if (s == 60) {
                s = 0
                m++
            }
            console.log(`ola ${m}:${s}:${ms}`)
            tempo.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`
        }, 10);
    }
}
pausar.onclick = function(){
    if(pausado == false)
    {
        clearInterval(contagem);
        pausado = true
        contando = false
        pausar.innerHTML = 'Continuar'
    }
    else
    {
        pausar.innerHTML = 'Pausar'
        pausado = false
        if(contando == false)
    {
        contando = true
        contagem = setInterval(() => {
            ms++
            if (ms == 100) {
                ms = 0
                s++
            }
            if (s == 60) {
                s = 0
                m++
            }
            console.log(`ola ${m}:${s}:${ms}`)
            tempo.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`
        }, 10);
    }
    }
        
}

zerar.onclick = function(){
    clearInterval(contagem);
    ms = 0
    s = 0
    m = 0
    tempo.innerText = '00:00.00'
    contando = false
    pausado = false
}