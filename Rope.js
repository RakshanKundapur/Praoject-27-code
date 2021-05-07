  
class Rope{
    constructor(body1, body2, offsetX){
        var options ={
            bodyA: body1,
            bodyB: body2,
            length: 10,
            stiffness: 0.04
        }
        this.offsetX = offsetX;
        this.rope = Matter.Constraint.create(options);
    
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA;
        var pointB = this.rope.bodyB;

        line(pointA.position.x + this.offsetX, pointA.position.y, pointB.position.x, pointB.position.y);
    }
}