class Rope{

    constructor(body1, body2, offsetX, offsetY){
        
        this.offsetY = offsetY
        this.offsetX = offsetX

        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x: this.offsetX, y: this.offsetY}
        }

        this.pointB = this.pointB;

        this.rope = Constraint.create(options);
        World.add(world, this.rope);

    }

    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position

        strokeWeight(4);
        stroke("white");
        line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY);
    }

}