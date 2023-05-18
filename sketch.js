//ojo derecho posision
let eyeX = 280; //debe llegar a 300 der -- 245 izq x
let eyeY = 130;


let eyeXC = 280;
let eyeYC = 140;

//boca inferior
let mouthY = 170;

//iris izquierdo
let eyeXL = 108; // min 76 max 139

function setup() {
  createCanvas(400, 400);
 
}

function draw() {
  //console.log(mouseX);
  background(220);
  
  //dibujo pinguino pato nose
  //base
  
  fill("rgb(108,153,231)");
  square(40, 20, 300, 60);
  
  
  push();

  //EYES
  //derecho
  noStroke();
  fill("rgb(95,121,165)");
  arc(280, 100, 90,50, -340, PI + QUARTER_PI, CHORD);
 

  fill("rgb(255,255,255)");
  circle(280, 130, 70);
  
 

  //izquierdo
  noStroke();
  fill("rgb(95,121,165)");
  arc(110, 100, 90,50, -340, PI + QUARTER_PI, CHORD);
  
    
  
  
  pop();
  noStroke();
  fill("rgb(255,255,255)");
  circle(110, 130, 70); //110 abajo -- 149 arriba
  push();
  
  //iris 
  //derecho
  push();
  fill("black");
  circle(eyeX, eyeY, 30);
  //luces derecho
  fill("white");
  circle(eyeX, eyeY, 10);
  pop();
  
  
  //  console.log(mouseY);
  //menores a 278
  
  //ojo derecho X
  if (mouseX > 295) {
    if (eyeX < 300) {
      eyeX++;
    }
  }
  if (mouseX <= 278) {
    if (eyeX > 263) {
      eyeX--;
    }
  }
  
  //ojo derecho Y
  if (mouseY < 125) {
    // 98 arriva 164 abajo
    if (eyeY < 98) {
      eyeY++;
    }
  }

  //  console.log(mouseY,eyeY);
  if (mouseY < 126) {
    if (eyeY > 110) {
      eyeY--;
    }
  } else {
    if (eyeY < 154) {
      eyeY++;
    }
  }
  //console.log(mouseX,mouseY)//x-->247-312 .. y-->96-164

 

  //iris left
  fill("black");
  circle(eyeXL, eyeY, 30);
  fill("white");
  circle(eyeXL, eyeY, 10); // min 76 max 139
  //DERECHA Y IZQUIERDA
  
  //ojo izquierdo X
  //derecha
  if (mouseX > 109) {
    if (eyeXL < 129) {
      eyeXL++;
    }
  }
  //izquierda
  if (mouseX <= 109) {
    if (eyeXL > 86 ) {
      eyeXL--;
    }
  }

  //onclick

  if (mouseIsPressed) {
    noStroke();
  
    fill("rgb(46,89,201)");
    circle(120, 210, 80);

    fill("rgb(41,90,214)");
    circle(265, 210, 80);
  }
  pop();
 
   push();
  //lineas
  stroke("#AF401D");
  strokeWeight(5);
  
  //boca
  fill("#FF5722");
  rect(165, mouthY, 60, 40, 30);

  fill("orange");
  rect(165, 130, 60, 40);
  pop();
  
  //alas
  fill("rgb(75,61,162)");
  rect(10, 150, 75, 145, 20, 15, 200, 35);
  fill("rgb(75,61,162)");
  rect(300, 150, 78, 135, 20, 15, 110, 35);
  stroke("#0F5A97");
}
