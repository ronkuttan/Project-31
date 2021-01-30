class Drop{
    constructor(x,y){
        var options = {
            'isStatic': false,
            'restitution':0.01,
            'friction':0.1,
            'density':1.0
        }
     
        this.r = 5;
        this.body = Bodies.circle(x,y,5,options)
        World.add(world,this.body)
        
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,480),y:random(0,450)})
        }
    }
    showDrop(){ 
        var pos = this.body.position
        strokeWeight(0.2)
        stroke("white")
        fill("blue")
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.r,this.r);
       
    }

    
}