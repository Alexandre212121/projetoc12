var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;

function preload(){
  pathImg = loadImage ("path.png") 
  boyImg = loadAnimation ("jake1.png", "jake2.png")
 
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 path = createSprite(200, 200, 400, 400)
 path.addImage("path1", pathImg)
 path.scale=1.2;
 path.velocityY = 4;
 //path.y = height/2;


//crie um sprite de menino
boy = createSprite(200, 200, 20, 20)
//adicione uma animação de corrida para ele
boy.addAnimation("running", boyImg)
boy.scale=0.5;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible = false

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible = false
}

function draw() {
  background(0);
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  
  // mover o menino com o mouse usando mouseX
  boy.x = mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(rightBoundary)
  boy.collide(leftBoundary)
  
  
  
  drawSprites();
}
