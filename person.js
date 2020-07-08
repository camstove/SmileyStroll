"use strict";

const SMILE_WIDTH = 15;
const TORSO = 40;
const LIMB = 30;

class Person{
    
    constructor(color = "yellow"){   
        this.cx = 0;
        this.cy = 0;
        
        this.radius = SMILE_WIDTH;
        this.smallR = Math.floor(.5*this.radius);
        
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
        
        // head
        ctx.beginPath()
        ctx.arc(0,0+TORSO+SMILE_WIDTH,SMILE_WIDTH,Math.PI*2,0);
        ctx.stroke();
        ctx.fill();
        //smile
        ctx.beginPath();
        ctx.arc(0,0+TORSO+SMILE_WIDTH, this.smallR, Math.PI,0);
        ctx.stroke();
        ctx.fillStyle = "black";
        
//         //left eye
        ctx.beginPath();
        ctx.arc(0-this.smallR, 0+TORSO+SMILE_WIDTH+this.smallR, 1.5, 2*Math.PI,0);
        ctx.fill();

        //right eye
        ctx.beginPath();
        ctx.arc(0+this.smallR, 0+TORSO+SMILE_WIDTH+this.smallR, 1, 0, 2*Math.PI);
        ctx.fill();

        //torso
        ctx.moveTo(0,0);
        ctx.lineTo(0,(0+TORSO));
        ctx.stroke();
        //arms
        ctx.moveTo(0-LIMB,0+TORSO/2);
        ctx.lineTo(0+LIMB,0+TORSO/2);
        ctx.stroke();
        //left leg
        ctx.moveTo(0,0);
        ctx.lineTo(0-15,0-LIMB);
        ctx.stroke();
        //right leg
        ctx.moveTo(0,0);
        ctx.lineTo(0+15,0-LIMB);
        ctx.stroke();
        
        ctx.restore();
    }
    
    Next(){}
    
}
