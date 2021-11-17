//creating the Player class
class Player{
    //defining the properties (constructor)
    constructor(x,y,w,h){
        //width and height
        this.w = w;
        this.h = h;

        //creating the body
        this.body = Bodies.rectangle(x,y,this.w,this.h,this.options);
        //adding the body to the world
        World.add(world,this.body);
    }

    //displaying it on the screen
    display(){
        var pos = this.body.position;
        
        push()
        fill("green");
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }

}