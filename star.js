"use strict";

const STAR_MIN = 2;
const STAR_MAX = 10;


function MakePoints() {
   let pts = [];

   for(let i = 0; i < 5; i++) {
       let angle = i*Math.PI*2/5;
       let x = Math.cos(angle);
       let y = Math.sin(angle);
       pts.push([x,y]);
   }
   return pts;
}

class Star{
    constructor(color="yellow"){
        this.points = MakePoints();
        this.cx = 0;
        this.cy = 0;
        this.height = 1;
        this.width = 1;
        this.theta = 0;
        this.color = color;
	    this.starOrder = [3,1,4,2,0];
        this.last = this.points.length-1;
        
        this.scale = Math.floor(Math.random() * (STAR_MAX - STAR_MIN + 1) ) + STAR_MIN;
        this.scaleDir = 1;
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
        this.theta += 1;
        this.theta %= 360;
        
        this.scale += this.scaleDir*.07;
	    
        if (this.scale <= STAR_MIN) {
	        this.scaleDir = 1;
	    } 

	    if (this.scale >= STAR_MAX) {
	        this.scaleDir =  -1;
	    }
        
    }
    
    GetPoint(pt){
        let id = this.starOrder[pt];
        let x = this.points[id][0];
        let y = this.points[id][1];
        return [x,y];
    }
    
    display(board) {
        let scale = this.scale;
        let ctx = board.GetContext();
        ctx.fillStyle = this.color;
        ctx.save();
        
        ctx.translate(this.cx, this.cy);
        ctx.rotate(this.theta * Math.PI/180);

        ctx.beginPath();
        
        let pt = this.GetPoint(this.last);
        ctx.moveTo(pt[0]*scale,pt[1]*scale);

        for(let i=0; i<=this.last; i++) {
            let pt = this.GetPoint(i);
            ctx.lineTo(pt[0]*scale,pt[1]*scale);
        }
        
        ctx.fill();
        ctx.closePath();

        ctx.restore();
    }
    
    RandomStar(){
    //random x
    let x = Math.floor(Math.random() * SCENE_WIDTH+1); 
    //random y
    let y = Math.floor(Math.random() * (canvas.height - canvas.height/2) ) + canvas.height/2 + STAR_MAX; 
    // random size
    let size = Math.floor(Math.random() * (STAR_MAX - STAR_MIN + 1) ) + STAR_MIN;
    
    return [x,y,size];
}
    
}
