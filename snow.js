class Snow{
    constructor(x,y,r){
        var options={
            'friction':0.5,
            'density':0.7
        }
        this.body=Bodies.circle(x,y,r,options)
        this.image=loadImage("snow5.webp")
        World.add(myWorld,this.body)
    }
    
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50 )
        
    }
}