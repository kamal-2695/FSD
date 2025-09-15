let speed = 120;          
let time = 96;          
let interval = 10;       
let maxSpeed = 120;      

let distance = 0;
let minutesPassed = 0;

while (minutesPassed + interval <= time) {
    distance += (speed * (interval / 60)); 
    minutesPassed += interval;

    
    speed = Math.min(speed * 2, maxSpeed);
}


let remaining = time - minutesPassed;
if (remaining > 0) {
    distance += speed * (remaining / 60);
}

console.log("Total distance:", distance, "km");
