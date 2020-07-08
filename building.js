"use strict";

const BUILDING_WIDTH = 250;
const BUILDING_HEIGHT = 300;
const WINDOW_SIZE = 60;
const AWNING_LENGTH = 70;

class Building{
    constructor(color = "red",home = false){
        
        this.cx = 0;
        this.cy = 0;
        this.height = 1;
        this.width = 1;
        this.theta = 0;
        this.color = color;
        this.home = home;
        
        this.building = new Block(color);
        this.building.transform(0,0,BUILDING_WIDTH,BUILDING_HEIGHT);
        
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
        ctx.save();
        ctx.translate(this.cx,this.cy);
        ctx.rotate(this.theta * Math.PI/180);
        ctx.scale(this.width,this.height);
        
        this.building.display(Board);
        
        ctx.beginPath();
        ctx.fillStyle='black';
            
        // window
        let window = new Block('#7efff5');
        window.transform(0,0,WINDOW_SIZE,WINDOW_SIZE);
        window.display(Board);
        
        if(this.home){
            //roof
            ctx.beginPath();
            ctx.fillStyle='#32ff7e';
            ctx.moveTo(-BUILDING_WIDTH/2,BUILDING_HEIGHT/2);
            ctx.lineTo(0,BUILDING_HEIGHT/2+100);
            ctx.lineTo(BUILDING_WIDTH/2,BUILDING_HEIGHT/2);
            ctx.fill();
            //awning
            ctx.beginPath();
            ctx.fillStyle='#4b4b4b';
            ctx.moveTo(BUILDING_WIDTH/2,AWNING_LENGTH/4);
            ctx.lineTo(BUILDING_WIDTH/2+AWNING_LENGTH,AWNING_LENGTH/4);
            ctx.lineTo(BUILDING_WIDTH/2,AWNING_LENGTH);
            ctx.fill();
        }else{
            let roof = new Block('black');
            roof.transform(0,BUILDING_HEIGHT/2,BUILDING_WIDTH+10,10);
            roof.display(Board);
        }
        
        ctx.fill();
        
        ctx.restore();
    }
    
    Next(){}
    
}
