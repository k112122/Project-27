class Roof {
    constructor() {
      var options = {
          isStatic: true
      }

      this.width = 700;
      this.height = 60;

      this.body = Bodies.rectangle(width/2,100,700,60,options);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }
