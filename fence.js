"use strict";

const POST_WIDTH = 15;
const POST_HEIGHT = 100;
const RAIL_WIDTH = 100;
const RAIL_HEIGHT = 15;
const RAIL_X = POST_WIDTH + RAIL_WIDTH/2;
const T_RAIL_Y = POST_HEIGHT - (POST_HEIGHT/6)*2;
const B_RAIL_Y = (POST_HEIGHT/6)*2;
const FENCE_WIDTH = POST_WIDTH + RAIL_WIDTH;

class Fence{
    
    constructor(color = "SaddleBrown"){
        
        this.cx = 0;
        this.cy = 0;
        this.height = 1;
        this.width = 1;
        this.theta = 0;
        this.color = color;
        
        //post
        this.post = new Block(color);
        this.post.transform(POST_WIDTH/2,POST_HEIGHT/2,POST_WIDTH,POST_HEIGHT);
        //top rail
        this.tRail = new Block(color);
        this.tRail.transform(RAIL_X,T_RAIL_Y,RAIL_WIDTH,RAIL_HEIGHT);
        //bottom rail
        this.bRail = new Block(color);
        this.bRail.transform(RAIL_X,B_RAIL_Y,RAIL_WIDTH,RAIL_HEIGHT);
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
        ctx.scale(this.width,this.height);
        
        this.post.display(Board);
        this.tRail.display(Board);
        this.bRail.display(Board);
        
        
        ctx.restore();
    }
    
    Next(){
    
    }
    
}
