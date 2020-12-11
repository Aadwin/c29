class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,40,40);
    this.image = loadImage("sprites/bird.png");
    Matter.Body.setDensity(this.body,3.0);
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
