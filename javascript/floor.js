//creating the Floor class
class Floor{
    //defining the properties (constructor)
    constructor(x,y,w,h){
        //width and height
        this.w = w;
        this.h = h;

        //the abilities the floor can do
        var options = {
            isStatic: true
        };

        //creating the body
        this.body = Bodies.rectangle(x,y,this.w,this.h,options);
        //adding the body to the world
        World.add(world,this.body);
    }

    //displaying it on the screen
    display(){
        var pos = this.body.position;
        
        push();
        fill("red");
        rect(pos.x,pos.y,this.w,this.h);
        pop();
        
    }
}