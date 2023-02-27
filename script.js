var ms = 00000
var s = 00
var m = 00
const tempo = document.getElementById('timer')
const iniciar = document.getElementById('inicio')
const zerar = document.getElementById('zerar')
iniciar.onclick = function(){
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
zerar.onclick = function(){
    clearInterval(contagem);
    ms = 0
    s = 0
    m = 0
    tempo.innerText = '00:00.00'
}