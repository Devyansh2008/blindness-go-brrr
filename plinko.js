class Plinko{
    constructor(x,y){
        var op={
            restitution:0.5,
            density:0.2,
           friction:0.8,
           isStatic:true
        }

        this.body=Bodies.circle(x,y,20,op)
        World.add(wo,this.body)
    }

    display(){
        var pos=this.body.position
        fill(random(0,255),random(0,255),random(0,255))
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,20)
      
    }
}