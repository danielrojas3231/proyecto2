class EnemigosNormal extends Enemigos{
    constructor(PosX,PosY,Vida,Vel){
    super(PosX,PosY,Vida,Vel);
 
    }

    pintar(){
        
        fill(0,255,255);
        ellipse(this.PosX,this.PosY, 60,60);

    }
     
    mover(){

    this.PosY+=this.Vel;

    }

    choque(xb,yb){
      
        if (dist(this.PosX,this.PosY,xb,yb)<60){
            this.Vida=this.Vida-1;
        }
    } 
 }