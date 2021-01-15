class Box {
    constructor(x,y,width,height)
    {
        this.Position=width/2-100
        boxY=610;
        
        this.leftSprite=createSprite(this.Position, this.Y, 20,100);
        this.leftSprite.shapeColor=color(255,0,0);
   
        this.LeftBody = Bodies.rectangle(this.Position+20, this.Y, 20,100 , {isStatic:true} );
        World.add(world, boxLeftBody);
   
        this.Base=createSprite(this.Position+100, this.Y+40, 200,20);
        this.Base.shapeColor=color(255,0,0);
   
        this.BottomBody = Bodies.rectangle(this.Position+100, this.Y+45-20, 200,20 , {isStatic:true} );
        World.add(world, boxBottomBody);
   
        this.leftSprite=createSprite(this.Position+200 , this.Y, 20,100);
        this.eftSprite.shapeColor=color(255,0,0);
   
        this.RightBody = Bodies.rectangle(this.Position+200-20 , this.Y, 20,100 , {isStatic:true} );
        World.add(world, boxRightBody);
        
    
    }
    
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);


    }



    
    }