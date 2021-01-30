class Umbrella{
    constructor(x,y,r){
        var options = {
            'isStatic': true
        }
        
        this.r = r;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,r,options)
        this.image = loadImage("Walking Frame/walking_1.png")
        World.add(world,this.body)
        
    }
    display(){ 
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image,0, 0, 350,350);
        pop();
        
    }
}