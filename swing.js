"use strict";

const LEG_LENGTH = 150;
const SEAT_LENGTH = 15;
const ROPE_LENGTH = 110;
const MAX_SWING = 50;

class Swing{
    constructor(){
        this.cx = 0;
        this.cy = 0;
        this.height = 1;
        this.width = 1;
        this.theta = 0;
        
        this.swingDir = 1;
        
        this.p = new Person();
        this.p.transform(0,-ROPE_LENGTH,.5,.5);
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
    
    Next(){
        
        this.theta += 1*this.swingDir;
        this.theta %= 360;
        
        if(this.theta >= MAX_SWING){
            this.swingDir = -1;
        }
        
        if(this.theta <= -MAX_SWING){
            this.swingDir = 1;
        }
        
        this.p.transform(0,0,1,1,this.swingDir/2);
    }
    
    display(Board){
        let ctx = Board.GetContext();
        ctx.save();
        ctx.translate(this.cx,this.cy);
        ctx.scale(this.width,this.height);
        
        ctx.beginPath();
        //legs
        ctx.moveTo(0,0);
        ctx.lineTo(-LEG_LENGTH/2,-LEG_LENGTH);
        ctx.moveTo(0,0);
        ctx.lineTo(LEG_LENGTH/2,-LEG_LENGTH);
        ctx.stroke();
        
        
        ctx.rotate(this.theta * Math.PI/180);
        
        //rope
        ctx.moveTo(0,0);
        ctx.lineTo(0,-ROPE_LENGTH);
        ctx.stroke();
        //seat
        ctx.moveTo(-SEAT_LENGTH,-ROPE_LENGTH);
        ctx.lineTo(SEAT_LENGTH,-ROPE_LENGTH);
        ctx.stroke();
        
        this.p.display(Board);
        
        ctx.restore();
    }
    
    
}
