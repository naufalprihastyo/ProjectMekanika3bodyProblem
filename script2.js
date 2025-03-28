const canvas = document.getElementById('ctx');
const ctx = canvas.getContext('2d')
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

let mouseX = 0;
let mouseY = 0;

canvas.addEventListener("mousemove", (event) => {
    // Dapatkan posisi mouse relatif terhadap canvas
    const rect = canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
});



class Benda{
    constructor(x,y,m,r){
        this.position = [x,y]
        this.velocity = [randomFunc(4,5),randomFunc(1,3)]
        this.acceleration = [0,0]
        this.mass = m;
        this.radius = r;

    }

    kenaiGaya(force){
        let efekGaya = math.divide(force,mass);
        this.acceleration = math.add(this.acceleration,efekGaya);
    }

    gravitasi(){
        
    }

    update(){
        this.velocity = math.add(this.velocity,this.acceleration);
        this.position = math.add(this.position,this.velocity);
        this.acceleration = [0,0];
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = 'black'
        ctx.fill();
    }
}
let obj = 0;
function init(){
    obj = new Benda(50,100,40,50)
}

function update(){
    ctx.clearRect(0,0,width,height);
    obj.update();
    obj.draw();
    requestAnimationFrame(update);
}

canvas.addEventListener("mousedown", (event) => {
    obj.position = [mouseX,mouseY];
    console.log("Mouse clicked at:", mouseX, mouseY);
});


init()
update()