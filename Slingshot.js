class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1= loadImage("sprites/sling1.png");
        this.sling2= loadImage("sprites/sling2.png");
        this.sling3= loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,250,120,30,100);
        image(this.sling2,230,110,30,70);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8)
           // line(pointA.x, pointA.y, pointB.x, pointB.y);
           line(pointA.x-20,pointA.y,pointB.x-20, pointB.y+10);
           line(pointA.x-20,pointA.y,pointB.x+21,pointB.y+15);
           image(this.sling3,pointA.x-20,pointA.y-10,15,20)

        }
    }
    
}