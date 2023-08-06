const horasEl = document.querySelector("#horas")
const minutosEl = document.querySelector("#minutos")
const segundosEl = document.querySelector("#segundos")
const millisegundosEl = document.querySelector("#millisegundos")
const iniciarBtn = document.querySelector("#iniciarBtn")
const pausarBtn = document.querySelector("#pausarBtn")
const continuarBtn = document.querySelector("#continuarBtn")
const resetarBtn = document.querySelector("#resetarBtn")

let intervalo
let horas = 0
let minutos = 0
let segundos = 0
let millisegundos = 0
let isPaused = false

iniciarBtn.addEventListener("click",iniciarTempo)
pausarBtn.addEventListener("click",pausarTempo)
continuarBtn.addEventListener("click",continuarTempo)
resetarBtn.addEventListener("click",resetarTempo)

function iniciarTempo(){
    intervalo = setInterval(()=>{
        if(!isPaused){
            millisegundos += 10

             if(millisegundos === 1000){
                segundos++
                millisegundos = 0
             }
             if(segundos === 60){
                minutos++
                segundos = 0
             }
             if(minutos ===60){
             horas++
             minutos = 0
            }
            
            horasEl.textContent = formatoTempo(horas)
            minutosEl.textContent = formatoTempo(minutos)
            segundosEl.textContent = formatoTempo(segundos)
            millisegundosEl.textContent = formaromillisegundos(millisegundos)


        }
    },10);

        iniciarBtn.style.display = "none"
        pausarBtn.style.display = "block"
        
}

function pausarTempo() {
    isPaused = true
    pausarBtn.style.display = "none"
    continuarBtn.style.display = "block"
}

function continuarTempo(){
    isPaused = false
    pausarBtn.style.display = "block"
    continuarBtn.style.display = "none"
}

function resetarTempo(){
    clearInterval(intervalo);
    isPaused = false
    minutos = 0;
    segundos = 0;
    millisegundos = 0;

    minutosEl.textContent = "00"
    segundosEl.textContent = "00"
    millisegundosEl.textContent = "000"

    iniciarBtn.style.display = "block"
    pausarBtn.style.display = "none"
    continuarBtn.style.display = "none"

    

}


function formatoTempo(tempo){
    return tempo <10 ? `0${tempo}`: tempo;
}

function formaromillisegundos(tempo){
    return tempo < 100 ?`${tempo}`.padstart(3,"0"): tempo;
}