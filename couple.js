"use strict";

const MAX_DISTANCE = 200;

function MakePath(){
    
}

class Couple{
    constructor(color1='yellow',color2='yellow'){
        this.cx = 0;
        this.cy = 0;
        this.height = 1;
        this.width = 1;
        this.theta = 0;
        this.color1 = color1;
        this.color2 = color2;
        
        this.person1 = new Person(color1);
        this.person1.transform(0,0,.8,.8);
        this.person2 = new Person(color2);
        this.person2.transform(46,0,.75,.75);
    }
    
    transform(tx=0,ty=0,sx=1,sy=1,theta=0){
        //translate
        this.cx += tx;
        this.cy += ty;
        
        this.maxX = this.cx + MAX_DISTANCE;
        this.maxY = this.cy - MAX_DISTANCE/2;
        this.minX = this.cx;
        this.minY = this.cy;
        
        //scale
        this.width *= sx;
        this.height *= sy;
        //rotate
        this.theta += theta;
    }
    

    
    Next(){
        console.log('cx,cy: ', this.cx,this.cy);
        console.log('max x,max y: ', this.maxX,this.maxY);
        
        if (this.cx < this.maxX && this.cy == this.minY)
            //move right
            this.cx += 1;
        
        if (this.cx == this.maxX && this.cy > this.maxY)
            //move down
            this.cy -= 1;
        
        if (this.cx > this.minX && this.cy == this.maxY)
            //move left
            this.cx -=1;
        
        if (this.cx == this.minX && this.cy < this.minY)
            //move up
            this.cy +=1;
        
    }
    
    display(Board){
        
        let ctx = Board.GetContext();
        ctx.save();
        ctx.translate(this.cx,this.cy);
        ctx.rotate(this.theta * Math.PI/180);
        ctx.scale(this.width,this.height);
    
        this.person1.display(Board);
        this.person2.display(Board);
        
        ctx.restore();
    }
}
