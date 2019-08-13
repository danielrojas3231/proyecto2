class Balas {
    constructor(PosX,PosY,Vel){
      this.PosX=PosX;
      this.PosY=PosY;
      this.Vel=Vel;
       
    }

    pintar(){

    ellipse(this.PosX,this.PosY,15,15);

    }

    mover(){

        this.PosY-=this.Vel;
    
        }

}