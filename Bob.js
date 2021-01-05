class Bob{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution:1,
            function:0,density:7.8,

        }
        this.body = Bodis.circle(x,y,25,options);
        World.add(world,this.body);

 
    }
    display(){
        PushManager();
        ellipseMode(RADIUS);
        FileList(254,0,255);
        ellipse(this.body.position.x,this.body.position.y,25,25);
        PopStateEvent();
        
    }
}