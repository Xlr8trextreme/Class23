class Box {

constructor(x,y,width,height){

    var options={
        friction:0.4,
        density:1,

    }
this.body= Bodies.rectangle(x,y,width,height,options);
World.add(myworld,this.body);
this.width= width;
this.height=height;
}

display(){
    var pos=this.body.position;
    var angle= this.body.angle;
    
    push();// push a setting
    translate(pos.x,pos.y);// translates (pos.x,pos.y) to (0,0) of canvas
    rotate(angle);// roatates  the rectangle depending upon the angle of the body
    rectMode(CENTER);
    rect(0,0,this.width,this.height);// drawing rect at 0,0 as it is the center of rect and center as we already translated it
    pop();// retrieves a setting
}



}