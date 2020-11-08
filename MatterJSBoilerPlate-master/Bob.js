class Bob {
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.x = x;
        this.y = y;

        this.body = Bodies.circle(this.x,this.y,70/2,options);

        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
       var angle = this.body.angle;

       push();
       translate(pos.x, pos.y);
       rotate(angle);
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(0, 0, 70, 70);
        pop();

    }
}