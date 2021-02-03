class Dustbin {
	constructor(x,y) {
		this.x = x;
		this.y = y;
		this.dustbinWidth = 200;
		this.dustbinHeight = 213;
		this.wallThickness = 20;
		
		this.image = loadImage("dustbin.png");
	    var options = {
			isStatic: true
		}
		this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, options)
		this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, options)
		this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, options)
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
	
	}
	display()
	{
			imageMode(CENTER);
			image(this.image, this.x, this.y,this.dustbinWidth, this.dustbinHeight)
			
	}

}