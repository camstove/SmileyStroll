"use strict";

const MAX_ROTATION = 25;
const BAR_LENGTH = 150;

class SeeSaw{
    
    constructor(color = 'brown'){
        this.cx = 0;
        this.cy = 0;
        this.height = 1;
        this.width = 1;
        this.theta = 0;
        this.color = color;
        
        this.spinDir = 1;
        
        this.p1 = new Person();
        this.p1.transform(-BAR_LENGTH/2+12,18,.5,.5);
        this.p2 = new Person();
        this.p2.transform(BAR_LENGTH/2-12,18,.5,.5);
        
        this.bar = new Block('black');
        this.bar.transform(0,15,BAR_LENGTH,3);
        this.barTheta = 0;
        this.post = new Block(color);
        this.post.transform(0,0,10,65);
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
        if(this.bar.GetTheta() >= MAX_ROTATION){
            this.spinDir = -1;
            
        }
        
        if(this.bar.GetTheta() <= -MAX_ROTATION){
            this.spinDir = 1;
        }
        
        this.p1.transform(this.spinDir/20,-this.spinDir,1,1);
        this.p2.transform(-this.spinDir/20,this.spinDir,1,1);
        
        this.bar.transform(0,0,1,1,this.spinDir);
    }
    
    display(Board){
        let ctx = Board.GetContext();
        
        ctx.save();
        ctx.translate(this.cx,this.cy);
        ctx.rotate(this.theta * Math.PI/180);
        ctx.scale(this.width,this.height);
        
        this.bar.display(Board);
        this.post.display(Board);
        this.p1.display(Board);
        this.p2.display(Board);
        
        ctx.restore();
    }
    
}
