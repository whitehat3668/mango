class launcher {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:0,
            stiffness:0.004
            }
            //this.bodyA = bodyA
            this.pointB = pointB
            this.chain = Constraint.create(options);
            World.add(world,this.chain);
        }
    
    display() 
    {
        if (this.chain.bodyA)
        { 
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
    }
    
    
    fly() 
    {
    this.chain.bodyA = null
    }
    }