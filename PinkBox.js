class Pbox extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    
  }
  display(){    
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    fill(254,191,202);
    rect(0, 0, this.width, this.height);
    pop();
  }

};
