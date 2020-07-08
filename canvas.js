"use strict";

class Board{
    
    constructor(width,height){
        
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = width;
        this.canvas.height = height;
        
        this.canvas.tabIndex = 0;
        this.canvas.addEventListener("keydown", Keypress);
        this.canvas.focus();
        
        this.ctx.translate(0,this.canvas.height);
        this.ctx.scale(1,-1);
        
        return this;
    }
    
    ClearBoard(){
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    height(){
        return(this.canvas.height);
    }
    
    width(){
        return(this.canvas.width);
    }
    
    GetContext(){
        return(this.ctx);
    }
    
    
    
}

