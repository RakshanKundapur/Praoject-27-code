class Bob {
    constructor(x, y, radius) {
      var options = {
          'isStatic': false,
          'restitution':1,
          'friction':0,
          'density':0.8
      }
      this.body = Matter.Bodies.circle(x, y, radius/2, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }

    display(){
      var pos = this.body.position;
      push()
      translate(pos.x, pos.y);
      stroke(0);
      fill(0);
      ellipse(0, 0, this.radius, this.radius);
      pop()
    }
}