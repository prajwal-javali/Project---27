class Bob {
    constructor(x, y, radius1, radius2) {
      var options = {
          isStatic: false,
          'restitution': 1,
          'friction':1.5,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, radius1, radius2, options);
      this.radius1 = radius1;
      this.radius2 = radius2;

      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      pop();

      ellipseMode(CENTER);
      fill("yellow");
      circle(pos.x, pos.y, this.radius1, this.radius2);
    }
  } 