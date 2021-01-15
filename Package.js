class Package {
constructor(x,y,width,height)
{
    var options = {
        'friction':0.3,
        'density':1.0
    }
    
    this.Body = Bodies.circle(width/2 , 200 , 5 ,{restitution:0.4, isStatic:true});
	World.add(world, this.Body);


}

display()
{
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    pop();


}

}