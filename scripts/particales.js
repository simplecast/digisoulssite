var Particals = function(x,y){
  this.pos = createVector(x,y);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  
  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.val);
    this.acc.mult(0);
  }
  
  this.applyForce = function(force){
    acc.add(force)
  }
  
  this.draw = function(){
    push();
    fill(255);
    stroke(255);
    strokeWeight(4);
    point(this.pos.x,this.pos.y);
    pop();
  }
}
