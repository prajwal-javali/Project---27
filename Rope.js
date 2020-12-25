class Rope {
    constructor(body1, body2, offsetX) {
        this.offsetX = offsetX;
        var options = {
            
            stiffness: 0.01,
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:0},
            length: 100
        }
        this.Chain = Constraint.create(options);
        World.add(world, this.Chain);
    }
    display() {
        var point1 = this.Chain.bodyA.position
        var point2 = this.Chain.bodyB.position
        strokeWeight(5);
        line(point1.x, point1.y, point2.x + this.offsetX, point2.y);
    }
}