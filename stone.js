
class Stone{
    constructor(x, y) 
    {
        var stone_options = 
        {
          isStatic:false,
          'friction':1,
          density : 1.0
        }
        
        this.radius = 40
        this.stone = Bodies.circle(x,y,this.radius,stone_options )
        this.image = loadImage("plucking mangoes/stone.png");
        World.add(world,this.stone)
      }
      display()
      {
        var pos = this.stone.position;
        imageMode(CENTER)
        image(this.image, pos.x, pos.y,this.radius,this.radius);
    }
}