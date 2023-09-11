
export default function lineWave (){
    const canvass = document.querySelectorAll(".canvasLineWave");

    if(canvass){
      canvass.forEach((canvas)=>{
        const ctx = canvas.getContext("2d");
        const lineWaveArray = []  
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
  
        window.addEventListener("resize",()=>{
          canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        })
        
        class Wave {
          constructor() {
            this.height = Math.random() * 50;
            this.length =   -0.006;                         
            this.sin =  300;                        
            this.frequency = Math.random() * 0.01;
            
            this.increment = 0.01;
          }
        
        
        
          update() {
           
            this.increment += this.frequency;
          }
        
          draw() {
            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);
            for (let i = 0; i < canvas.width; i++) {
              ctx.lineTo(
                i,canvas.height / 2 + Math.sin(i * this.length + this.increment) * this.sin * Math.sin(this.increment * 4)
              );
            
            }
            ctx.fillStyle ="rgba(15, 136, 250, 0.001)"
            ctx.strokeStyle="#0668EB";
            ctx.lineWidth= 0.15;
            ctx.stroke();
            ctx.fill();
          }
        }
        
        for (let j = 0; j < 100; j++) {
          lineWaveArray.push(new Wave());
        }
        
        function handleWave() {
          for (let i = 0; i < lineWaveArray.length; i++) {
            lineWaveArray[i].draw();
            lineWaveArray[i].update();
            
    
           
           
            if(lineWaveArray[i].frequency < 1){
                lineWaveArray[i].frequency +=  0.009;
            }
    
            if(lineWaveArray[i].increment >= 2){
                lineWaveArray[i].increment -= 1;
                lineWaveArray[i].frequency -=  0.0009;
              
            }
          }
        }
    
        
        
        function animate() {
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          requestAnimationFrame(animate);
          handleWave();
        }
        
        animate();
      })
      
    }
    
}






