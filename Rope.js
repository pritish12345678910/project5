class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var op = {
            bodyA:body1,
            bodyB:body2,
            pointB: {x:this.offsetX , y:this.offsetY}
        }
        this.rope = Matter.constraint.create(op);
        World.add(world,this.rope);
    }
    display(){
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;

        strokeWeight(2);
        var Anchor1x = point1.x;
        var Anchor1y = point1.y;


        var Anchor2x = points.x + this.offsetX;
        var Anchor2Y = points.y + this.offsetY;

        Line(Anchor1x,Anchor1y,Anchor2x,Anchor2y);
    }
}