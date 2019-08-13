class EnemigosRapidos extends Enemigos{
    constructor(PosX,PosY,Vida,Vel){
    super(PosX,PosY,Vida,Vel);
 
    }

    pintar(){

        fill(255,0,0);
        rect(this.PosX,this.PosY, 60,100);

    }
     
    mover(){

    this.PosY+=this.Vel;

    }
/*
    choque(xb,yb){
      
        if (xb>this.PosX-30 && xb<this.PosX+30 && yb>this.PosY-50 && yb<this.PosY+50){
            this.Vida=this.Vida-1;
        }
    }  */
 }