class Bob{
    constructor(x,y,r){
        var options={
            restitution:1.0,
            friction:0,
            density:0.8,
            isStatic:false
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,r,options); 
        World.add(world,this.body);
    }
    display(){
     var pos=this.body.position;
     push();
     strokeWeight(4);
     fill("purple");
     ellipseMode(RADIUS);
     ellipse(pos.x,pos.y,this.r,this.r);
     pop();
    }
}