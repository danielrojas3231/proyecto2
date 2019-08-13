class Personaje {
   constructor(PosX,PosY,Vida,Vel){
   this.PosX=PosX;
   this.PosY=PosY;
   this.Vida=Vida;
   this.Vel=Vel;

}

pintar(){
   fill(250,250,0);
rect(this.PosX,this.PosY,150,50,30);

}

mover(dir){

    switch(dir){

      case 0:

      this.PosX+=this.Vel;

      break;

      case 1:

      this.PosX-=this.Vel;

      break;

    }


}


}