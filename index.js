var horas = document.getElementById('horas')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')

var relogio = setInterval(function time(){
    var data = new Date()
    var hr = data.getHours()
    var mi = data.getMinutes()
    var se = data.getSeconds()
    
    horas.textContent  = hr
    minutos.textContent = mi
    segundos.textContent = se

}  )