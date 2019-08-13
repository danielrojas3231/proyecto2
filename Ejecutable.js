let fondo;
let pantallas;
let personaje;
let bala=[];
let enemigosN=[];
let enemigosR=[];
let derecha;
let izquierda;



function setup() {

createCanvas(1200,700);
rectMode(CENTER);
frameRate(20);

pantallas=0;
personaje = new Personaje(width/2,620,3,10);
fondo = loadImage("data/fondo3.jpg");
derecha=false;
izquierda=false;

}

function draw() {

  image(fondo,0,0);

  // pinta el personaje y pone las condiciones de movimiento
  personaje.pintar();
  if(derecha){
   personaje.mover(0);
  }
  if(izquierda){
    personaje.mover(1);
   }

  //pinta y mueve las balas
  for (i=0;i<bala.length;i++){
  bala[i].pintar();
  bala[i].mover();
 } 



//pinta enemigos normales
  
 if(frameCount%100==0){
  for(i=0;i<10;i++){
   
    
   enemigosN.push( new EnemigosNormal(150+(100*i),0,1,2) );

  }
 }

 for (i=0;i<enemigosN.length;i++){

  enemigosN[i].pintar();
  enemigosN[i].mover();
 }


// pinta enemigos rapidos

 if(frameCount%300==0){
  let xe;

   xe = int(random(100,1100));
   console.log(xe);
    
   enemigosR.push(new EnemigosRapidos (xe,50,2,6));

 }

 for (i=0;i<enemigosR.length;i++){

  enemigosR[i].pintar();
  enemigosR[i].mover();
  /*
  enemigosR[i].choque(bala.PosX,bala.PosY);

  if(enemigosR[i].Vida==0){

    enemigosR.splice(i);
 
   } */
 }

}

function keyPressed(){
 

  if(keyCode==37){
   izquierda=true;
  }

  if(keyCode==39){
    derecha=true;
  }

  if(keyCode==32){

    bala.push( new Balas(personaje.PosX,personaje.PosY-25,10));


  }

  
}


function keyReleased(){
 
     if(keyCode==37){
      izquierda=false;
    }
       
    if(keyCode==39){
      derecha=false;
    }


}

