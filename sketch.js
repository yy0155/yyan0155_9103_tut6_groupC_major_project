let fixedColor;
let size;
let angle = 0; 
let scaleFactor;
let backgroundColor = [];
let largeCircleColors = [];
let smallCircleColors = [];
let flameParticles = [];
let spaceships = [];



// To store circles whose size and color can be modified together
let randomCircles = [];

// Track mosaic
let isMosaicMode = false;  

function setup() {
  // Calculate the size of the canvas
  
  size = Math.min(windowWidth, windowHeight);
  scaleFactor = Math.min(windowWidth, windowHeight) / 1024;
  createCanvas(size, size);
  angleMode(DEGREES); 
document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {  
        // mosaicmode
        isMosaicMode = !isMosaicMode;
        draw();  
    } else if (event.key === 's') {
        // add spaceship
        for (let i = 0; i < 2; i++) { 
            spaceships.push(new Spaceship(random(width), random(height), random(1, 5), random(TWO_PI)));
        }
        draw();  
    }
});
  noStroke();
  
  
  
  // Colors of the circles in the middle
  largeCircleColors = [
    color(233, 75, 60), color(119, 197, 147), color(75, 156, 211),
    color(255, 215, 0), color(181, 101, 167), color(255, 165, 0)
  ];

  // Colors of the "randomCircles"
  smallCircleColors = [
    color(75, 156, 211), color(255, 215, 0), color(181, 101, 167),
    color(255, 165, 0), color(233, 75, 60)
  ];

  backgroundColor = [color(3, 61, 94)];
  // Initialize moving point color
  movingPointColor = color(255, 20, 147); // Bright pink for visibility



  // Store circles whose size and color can be modified together
  let randomCircle;

  randomCircle = {fill:smallCircleColors[0],
    pattern: [650, 270, 25, 25] };
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[1],
    pattern: [600, 300, 20, 20] };
    randomCircles.push(randomCircle);
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [640, 340, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [730, 190, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [740, 210, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [730, 240, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [830, 350, 50, 50] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [880, 420, 7, 7] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [880, 450, 5, 5] };
    randomCircles.push(randomCircle);
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [890, 450, 5, 5] };
    randomCircles.push(randomCircle);
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [880, 490, 20, 20] };
    randomCircles.push(randomCircle);
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [880, 510, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [885, 570, 5, 5] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [860, 575, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [840, 550, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [820, 610, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [850, 675, 20, 20] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [870, 660, 5, 5] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [815, 650, 30, 30] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [830, 700, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [840, 710, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [485, 765, 20, 20] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [480, 810, 30, 30] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [490, 865, 25, 25] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [520, 900, 40, 40] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [550, 920, 30, 30] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [600, 920, 5, 5] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [460, 900, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [380, 670, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [340, 620, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [335, 900, 6, 6] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [320, 890, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [290, 850, 50, 50] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [295, 790, 30, 30] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [310, 810, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [310, 770, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [250, 700, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [280, 690, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [160, 690, 80, 80] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [125, 650, 80, 80] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [105, 750, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [115, 770, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [140, 510, 100, 100] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [95, 590, 25, 25] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [80, 470, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [150, 410, 70, 70] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [270, 390, 130, 130] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [305, 255, 175, 175] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [110, 320, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [130, 260, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [175, 210, 10, 10] };
    randomCircles.push(randomCircle);

    // The circle with the same color of the background
    randomCircle = {fill:backgroundColor[0],
      pattern: [510, 280, 70]};
        randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[4],
  pattern: [520, 280, 70]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[3],
  pattern: [560, 100, 15]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[0],
  pattern: [580, 100, 10]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[4],
  pattern: [570, 110, 10]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[1],
  pattern: [650, 170, 100, 100]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[2],
  pattern: [600, 250, 50, 50]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[0],
  pattern: [680, 250, 30, 30]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[2],
  pattern: [690, 340, 35, 35]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[3],
  pattern: [720, 170, 5, 5]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[0],
  pattern: [770, 240, 10, 10]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[2],
  pattern: [775, 320, 115, 115]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[3],
  pattern: [850, 320, 10, 10]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[3],
  pattern: [780, 470, 150, 150]};
    randomCircles.push(randomCircle);

    // The circle with the same color of the background
    randomCircle = {fill:backgroundColor[0],
      pattern: [770, 550, 100, 100]};
        randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[4],
  pattern: [770, 560, 100, 100]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[3],
  pattern: [880, 430, 10, 10]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[2],
  pattern: [860, 620, 60, 60]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[0],
  pattern: [700, 650, 50, 50]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[1],
  pattern: [760, 710, 100, 100]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[0],
  pattern: [750, 790, 50, 50]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[2],
  pattern: [600, 800, 200, 200]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[1],
  pattern: [380, 750, 125, 125]};
    randomCircles.push(randomCircle);

    // The circle with the same color of the background
    randomCircle = {fill:backgroundColor[0],
      pattern: [380, 850, 130, 130]};
        randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[4],
  pattern: [380, 850, 100, 100]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[0],
  pattern: [290, 730, 10, 10]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[1],
  pattern: [330, 680, 20, 20]};
    randomCircles.push(randomCircle);

}

function draw() {

  // Fit the image to the window size
  scale(scaleFactor);
  originalImage();
  if (isMosaicMode) {
    angle += 0.2; 
  }
  scale(1 / scaleFactor);
  for (let ship of spaceships) {
    ship.update();
    ship.draw();
  }

}

// Function of special pattern1
function drawDuelCircle(x, y, radius, delta) {
  fill(233, 75, 60);
  ellipse(x, y, radius * 2, radius * 2);
  fill(119, 197, 147);
  ellipse(x, y, radius - delta, radius - delta);
}

// Function of special pattern2
function drawSpecialCircle(x, y, outerRadius, innerRadius) {
  fill(75, 156, 211);
  arc(x, y, 2 * outerRadius, 2 * outerRadius, 0, PI);

  fill(255, 215, 0);
  arc(x, y, 2 * outerRadius, 2 * outerRadius, PI, TWO_PI);

  fill(181, 101, 167);
  ellipse(x, y, 2 * innerRadius, 2 * innerRadius);
}

// Function of special pattern3
function drawComplexCircle(x, y, outerRadius, middleRadius, innerRadius) {
  fill(255, 165, 0);
  ellipse(x, y, 2 * outerRadius, 2 * outerRadius);
  fill(233, 75, 60);
  ellipse(x, y, 2 * middleRadius, 2 * middleRadius);
  fill(119, 197, 147);
  ellipse(x, y, 2 * innerRadius, 2 * innerRadius);
}


function originalImage() {
  background(3, 61, 94);
  let x = 512;
  let y = 512;
  let mosaicSize = 5;  
  let frameCounter = frameCount % 30; 


  if (isMosaicMode) {
    if (frameCounter === 0) {
      //This is the code of array s
      let lastColor = largeCircleColors.pop();
      largeCircleColors.unshift(lastColor); 
    }


    for (let r = 390, i = 0; r >= 70; r -= 40, i++) {
      fill(largeCircleColors[i % largeCircleColors.length]);
      for (let dx = -r; dx <= r; dx += mosaicSize) {
        for (let dy = -r; dy <= r; dy += mosaicSize) {
          if ((dx + mosaicSize / 2) * (dx + mosaicSize / 2) + (dy + mosaicSize / 2) * (dy + mosaicSize / 2) <= r * r / 4) {
            rect(x + dx, y + dy, mosaicSize, mosaicSize);
          }
        }
      }
    }

    push(); 
    translate(x, y); 
    rotate(angle+5); 
    translate(-x, -y); 
    
    
    fill(0, 0, 255);
    for (let dx = -15; dx <= 15; dx += mosaicSize) {
      for (let dy = -15; dy <= 15; dy += mosaicSize) {
        if (dx * dx + dy * dy <= 15 * 15/2) {
          rect(x + dx, y - 30 + dy, mosaicSize, mosaicSize);
        }
      }
    }
  
    fill(0, 255, 0);
    for (let dx = -15; dx <= 15; dx += mosaicSize) {
      for (let dy = -15; dy <= 15; dy += mosaicSize) {
        if (dx * dx + dy * dy <= 15 * 15/2) {
          rect(x + dx, y + 30 + dy, mosaicSize, mosaicSize);
        }
      }
    }

    let moonRadius = 100;
    let offset = 45;
  
    fill(255, 165, 0);
    for (let dx = -moonRadius; dx <= moonRadius; dx += mosaicSize) {
      for (let dy = -moonRadius; dy <= moonRadius; dy += mosaicSize) {
        if (dx * dx + dy * dy <= moonRadius * moonRadius) {
          rect(500 + dx, 200 + dy, mosaicSize, mosaicSize);
        }
      }
    }
  
    fill(3, 61, 94);
    for (let dx = -moonRadius * 0.95; dx <= moonRadius * 0.95; dx += mosaicSize) {
      for (let dy = -moonRadius * 0.95; dy <= moonRadius * 0.95; dy += mosaicSize) {
        if (dx * dx + dy * dy <= (moonRadius * 0.95) * (moonRadius * 0.95)) {
          rect(500 + offset + dx, 200 + dy, mosaicSize, mosaicSize);
        }
      }
    }

    // Other special patterns
    drawDuelCircleMosaic(550, 180, 30, 10, mosaicSize);
    drawDuelCircleMosaic(650, 300, 15, 5, mosaicSize);
    drawSpecialCircleMosaic(820, 760, 20, 15, mosaicSize);
    drawDuelCircleMosaic(500, 730, 15, 5, mosaicSize);
    drawComplexCircleMosaic(210, 790, 50, 25, 10, mosaicSize);
    drawComplexCircleMosaic(220, 550, 90, 70, 20, mosaicSize);
    drawDuelCircleMosaic(400, 320, 30, 20, mosaicSize);
    drawSpecialCircleMosaic(160, 300, 20, 15, mosaicSize);

    for (let circle of randomCircles){  
      fill(circle.fill);
      let [cx, cy, r1, r2] = circle.pattern; 
      r2 = r2 || r1;  

    for (let dx = -r1; dx <= r1; dx += mosaicSize) {
      for (let dy = -r2; dy <= r2; dy += mosaicSize) {
          if (dx * dx + (dy * (r1 / r2)) * (dy * (r1 / r2)) <= r1 * r1/4) {  
              rect(cx + dx, cy + dy, mosaicSize, mosaicSize);
          }
      }
  }
}

  } else {
    // 


    // middle circle
    noStroke();
    for (let r = 390, i = 0; r >= 70; r -= 40, i++) {
      fill(largeCircleColors[i % largeCircleColors.length]);
      ellipse(512, 512, r, r); 
    }
    

    // Two small circles in the middle
    fill(0, 0, 255);
    ellipse(x, y - 30, 30, 30);
    fill(0, 255, 0);
    ellipse(x, y + 30, 30, 30);

    // The moon shape
    let moonRadius = 100;
    let offset = 45;
    fill(255, 165, 0);
    ellipse(500, 200, moonRadius * 2, moonRadius * 2);
    fill(3, 61, 94);
    ellipse(500 + offset, 200, moonRadius * 1.9, moonRadius * 1.9);

    // Other special patterns
    drawDuelCircle(550, 180, 30, 10);

    drawDuelCircle(650, 300, 15, 5);

    drawSpecialCircle(820, 760, 20, 15);

    drawDuelCircle(500, 730, 15, 5);

    drawComplexCircle(210, 790, 50, 25, 10);

    drawComplexCircle(220, 550, 90, 70, 20);
    
    drawDuelCircle(400, 320, 30, 20);

    drawSpecialCircle(160, 300, 20, 15);
    
    // Draw "randomCircles"
    for (let circle of randomCircles) {
      fill(circle.fill);
      ellipse(...circle.pattern);
    }

  }
}

// Fit canvas and pattern to window size
function windowResized() {

  size = Math.min(windowWidth, windowHeight);
  scaleFactor = Math.min(windowWidth, windowHeight) / 1024;

  resizeCanvas(size, size);

  scale(scaleFactor);

  originalImage();

}

function drawDuelCircleMosaic(x, y, radius, delta, mosaicSize) {
  let outerRadius = radius;
  let innerRadius = radius - delta;

  for (let dx = -outerRadius; dx <= outerRadius; dx += mosaicSize) {
    for (let dy = -outerRadius; dy <= outerRadius; dy += mosaicSize) {
      let distance = sqrt(dx * dx + dy * dy);
      if (distance <= outerRadius) {
        fill(233, 75, 60);
        rect(x + dx, y + dy, mosaicSize, mosaicSize);
      }
    }
  }

  for (let dx = -innerRadius; dx <= innerRadius; dx += mosaicSize) {
    for (let dy = -innerRadius; dy <= innerRadius; dy += mosaicSize) {
      let distance = sqrt(dx * dx + dy * dy);
      if (distance <= innerRadius) {
        fill(119, 197, 147);
        rect(x + dx, y + dy, mosaicSize, mosaicSize);
      }
    }
  }
}

function drawSpecialCircleMosaic(x, y, outerRadius, innerRadius, mosaicSize) {
  fill(255, 215, 0);
  for (let dx = -outerRadius; dx <= outerRadius; dx += mosaicSize) {
      for (let dy = -outerRadius; dy <= 0; dy += mosaicSize) {
          if (dx * dx + dy * dy <= outerRadius * outerRadius) { 
              rect(x + dx, y + dy, mosaicSize, mosaicSize);
          }
      }
  }

  fill(75, 156, 211);
  for (let dx = -outerRadius; dx <= outerRadius; dx += mosaicSize) {
      for (let dy = 0; dy <= outerRadius; dy += mosaicSize) {
          if (dx * dx + dy * dy <= outerRadius * outerRadius) { 
              rect(x + dx, y + dy, mosaicSize, mosaicSize);
          }
      }
  }

  fill(181, 101, 167);
  for (let dx = -innerRadius; dx <= innerRadius; dx += mosaicSize) {
      for (let dy = -innerRadius; dy <= innerRadius; dy += mosaicSize) {
          if (dx * dx + dy * dy <= innerRadius * innerRadius) { 
              rect(x + dx, y + dy, mosaicSize, mosaicSize);
          }
      }
  }
}

function drawComplexCircleMosaic(x, y, outerRadius, middleRadius, innerRadius, mosaicSize) {

  for (let dx = -outerRadius; dx <= outerRadius; dx += mosaicSize) {
    for (let dy = -outerRadius; dy <= outerRadius; dy += mosaicSize) {
      let distance = sqrt(dx * dx + dy * dy);
      if (distance <= outerRadius) {
        fill(255, 165, 0);  
        rect(x + dx, y + dy, mosaicSize, mosaicSize);
      }
    }
  }

  for (let dx = -middleRadius; dx <= middleRadius; dx += mosaicSize) {
    for (let dy = -middleRadius; dy <= middleRadius; dy += mosaicSize) {
      let distance = sqrt(dx * dx + dy * dy);
      if (distance <= middleRadius) {
        fill(233, 75, 60);  
        rect(x + dx, y + dy, mosaicSize, mosaicSize);
      }
    }
  }

  for (let dx = -innerRadius; dx <= innerRadius; dx += mosaicSize) {
    for (let dy = -innerRadius; dy <= innerRadius; dy += mosaicSize) {
      let distance = sqrt(dx * dx + dy * dy);
      if (distance <= innerRadius) {
        fill(119, 197, 147); 
        rect(x + dx, y + dy, mosaicSize, mosaicSize);
      }
    }
  }
}

class Spaceship {
  constructor(x, y, speed, direction) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.direction = direction;
    this.color = color(random(255), random(255), random(255)); 
  }

  update() {
    this.x += this.speed * cos(this.direction);
    this.y += this.speed * sin(this.direction);
  }

  draw() {
    push();
    translate(this.x, this.y);
    rotate(this.direction);
    noStroke();

    fill(this.color);
    ellipse(0, 0, 60, 30); 
    fill(255); 
    ellipse(0, -5, 25, 25); 
    
    fill(255, 255, 255, 50);
    ellipse(0, 0, 70, 40); 

    pop();
  }
}
