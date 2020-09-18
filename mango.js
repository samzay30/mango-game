var mango;
class Mango{
    constructor(x, y) 
    {
        var mango_options = 
        {
          isStatic:false,
          restitution : 1.0,
          density : 1.0
        }
        
        this.radius = 10
        this.stone = Bodies.circle(x,y,this.radius,stone_options )
        this.image = loadImage("plucking mangoes/mango.png");
        World.add(world,this.stone)
      }
      display()
      {
        ellipseMode(RADIUS)
        ellipse(this.stone.position.x,this.stone.position.y,20,20)
        image(this.image, 0, 0, this.width, this.height);
    }
}