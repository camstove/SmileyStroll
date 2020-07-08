"use strict";

class Block{
    
    constructor(color){
        this.cx = 0;
        this.cy = 0;
        this.height = 1;
        this.width = 1;
        this.theta = 0;
        this.color = color;
    }
    
    transform(tx=0,ty=0,sx=1,sy=1,theta=0){
        //translate
        this.cx += tx;
        this.cy += ty;
        //scale
        this.width *= sx;
        this.height *= sy;
        //rotate
        this.theta += theta;
    }
    
    display(Board){
        let ctx = Board.GetContext();
        ctx.fillStyle = this.color;
        ctx.save();
        
        ctx.translate(this.cx,this.cy);
        ctx.rotate(this.theta * Math.PI/180);
        ctx.translate(-this.width/2,-this.height/2);
        ctx.scale(this.width,this.height);
        
        ctx.fillRect(0,0,1,1);
        
        ctx.restore();
    }
    
    GetCX(){
        return this.cx;
    }
    
    GetCY(){
        return this.cx;
    }
    
    GetTheta(){
        return this.theta;
    }
    
    Next(){}
    
}
