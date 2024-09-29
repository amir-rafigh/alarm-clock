const time = document.getElementById('time');
const select =document.querySelectorAll('select');
const setalarm_btn = document.querySelector('button');
let inpalarm;
let alarmsong = new Audio("./music/energy wake up.mp3")
let alarmState = 'noset'



setInterval(() => {    
    let date = new Date();
    let second = date.getSeconds();
    let minute = date.getMinutes();
    let hour = date.getHours();

    second = second<10? "0" + second :second;
    minute = minute<10? "0" + minute :minute;
    hour   = hour<10?"0"    + hour   :hour;

    time.innerHTML = `${hour}:${minute}:${second}`

    if(inpalarm == `${hour}:${minute}`){
        alarmsong.play()        
    }
    
}, 1000);

for(i=1 ; i<=23 ; i++){
    i= i<10? "0"+i :i
    const hour = `<option value="${i}">${i}</option>`;
    select[0].firstElementChild.insertAdjacentHTML("afterend" , hour)
}
for(i=1 ; i<=59 ;i++){
    i = i<10?"0"+i : i;
    let minute = `<option value="${i}">${i}</option>`;
    select[1].firstElementChild.insertAdjacentHTML("afterend" , minute)
}

setalarm_btn.addEventListener("click" , ()=>{
    inpalarm = `${select[0].value}:${select[1].value}`;
    if(select[0].value == 'hour'|| select[1].value == 'minute'){
        alert('Please set hour and minute')
    }
    setalarm(alarmState);
    
})

function setalarm(State){
    if(State == "noset"){
        document.getElementById('controller').classList.add("input");
        setalarm_btn.innerHTML = 'Clear alarm'
        alarmState = 'set'
        

        

    }
    else{
        document.getElementById('controller').classList.remove("input");
        setalarm_btn.innerHTML = "Set alarm";        
        inpalarm=''
        alarmsong.pause()
        alarmState = "noset"
    }

}





