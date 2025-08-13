let clock= document.querySelector('.clock')

function digitalclock(){
let time = new Date()
clock.innerHTML = time.toLocaleTimeString();
}
setInterval(digitalclock,1000)