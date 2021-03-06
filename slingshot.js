class Slingshot{
    constructor(bodyA,pointB){
       var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.02,
            length:20
        }
        this.pointB=pointB
        this.Slingshot=Constraint.create(options)
        World.add(world,this.Slingshot)
    }

    display(){
        if(this.Slingshot.bodyA){
        var pointA=this.Slingshot.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }

    fly(){
        this.Slingshot.bodyA=null;
    }
    
}