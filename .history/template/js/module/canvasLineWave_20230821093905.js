
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
                lineWaveArray[i].frequency -=  0.008;
              
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

    // const canvasBanner = document.querySelector("#canvasBanner");
    // if(canvasBanner){
    //   class Wave {
    //     constructor(context, xOffset, yOffset, opacity) {
    //       this.lambda = 650;
    //       this.period = 700;
    //       this.amplitude = 75;
    //       this.xOffset = xOffset;
    //       this.yOffset = yOffset;
    //       this.context = context;
    //       this.color = `rgba(0,160,180,${opacity})`;
    //       this.time = 0;
      
    //       this.twoPI = 2 * Math.PI;
    //       this.spaceConst = this.twoPI / this.lambda;
    //       this.timeConst = this.twoPI / this.period;
    //     }
    //     generateWave() {
    //       this.time = (this.time + 1) % this.period;
    //       this.context.fillStyle = this.color;
      
    //       for (let i = this.xOffset; i < window.innerWidth; i += 10) {
    //         this.context.beginPath();
    //         const x = i;
    //         const y = this.amplitude * Math.sin(this.spaceConst * x - this.timeConst * this.time + this.xOffset) + this.yOffset;
    //         this.context.arc(x, y, 1.2, 0, this.twoPI, false);
    //         this.context.closePath();
    //         this.context.fill();
    //       }
    //     }
    //   }
    //   class Main {
    //     initCanvas() {
    //       this.canvas = document.getElementById("canvasBanner");
    //       this.canvas.width = window.innerWidth;
    //       this.canvas.height = window.innerHeight;
    //       this.context = this.canvas.getContext("2d");
    //       this.wave = [];
      
    //       for (let i = 1; i < 10; i++) {
    //         this.wave.push(
    //           new Wave(
    //             this.context,
    //             i * 0.2,
    //             i * 6 + this.canvas.height / 2,
    //             i * 10 / 100
    //           )
    //         );
    //       }
      
    //       this.draw();
    //     }
    //     draw() {
    //       this.context.fillStyle = "black";
    //       this.context.rect(0, 0, this.canvas.width, this.canvas.height);
    //       this.context.fill();
    //       this.wave.map((w, i) => {
    //         w.generateWave.call(w);
    //       });
    //       window.requestAnimationFrame(this.draw.bind(this));
    //     }
    //   }
      
    //   jQuery(document).ready(function() {
    //     const main = new Main();
    //     window.onload = main.initCanvas();
    //   });
      
    //   jQuery(window).resize(function() {
    //     const main = new Main();
    //     window.onload = main.initCanvas();
    //   });
      
      
      
    // }
    
}






