class Ball{

constructor(x, y, radius) {
    var options = {
        'restitution': 0.4,
        'friction': 0,
        'frictionAir': 0.0,
        'slop': 1.0, 
        'inertia': Infinity,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius
    this.x = x;
    this.y = y;
    


    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill(0);
    ellipse(0, 0, this.radius);
    pop();
  }

  up(){
    if(keyDown(UP_ARROW)){
    
      this.body.position.x = 75;
      this.body.position.y = 225;
  }

  }

}
