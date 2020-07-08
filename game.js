"use strict";

var board,block,sky,ground,fence,home,school, player,star, animation, couple,couple2, seesaw, seesaw2, swing, swing2;

var objs = [];
var dynamics = [];

const SCENE_WIDTH = 3000;
const PLAYER_SPEED = 100;
const MAX_STARS = 100;

function StartGame(){
    animation = false;
    board = new Board(500,500);
    
    //sky
    sky = new Block("#273c75");
    sky.transform(SCENE_WIDTH/2,3*canvas.height/4,SCENE_WIDTH,canvas.height/2);
    objs.push(sky);
    
     //star
    for(let x = 0; x<MAX_STARS;x++){
        star = new Star();
        let param = star.RandomStar();
        star.transform(param[0],param[1],param[2],param[2]);
        objs.push(star);
    }
    
    //ground
    ground = new Block("#44bd32");
    ground.transform(SCENE_WIDTH/2,canvas.height/4,SCENE_WIDTH,canvas.height/2);
    objs.push(ground);
    
    //fence
    let num_fences = Math.ceil(SCENE_WIDTH/FENCE_WIDTH);
    for(let i=0;i<num_fences;i++){
        fence = new Fence();
        fence.transform((FENCE_WIDTH*i),230);
        objs.push(fence);
    }
    
    //home
    home = new Building('olive',true);
    home.transform((BUILDING_WIDTH/2-32),(BUILDING_HEIGHT/2+5));
    objs.push(home);
    
    //school
    school = new Building('red');
    school.transform(SCENE_WIDTH -(BUILDING_WIDTH/2-32),(BUILDING_HEIGHT/2+5));
    objs.push(school);
    
    //couple walking
    couple = new Couple('magenta','blue');
    couple.transform(350,200);
    objs.push(couple);

//swing 2
    swing2 = new Swing();
    swing2.transform(800,345);
    objs.push(swing2);
    
    //seesaw
    seesaw = new SeeSaw();
    seesaw.transform(1000,125);
    objs.push(seesaw);
    
//      //couple 2 walking
//      couple2 = new Couple('magenta','blue');
//      couple2.transform(1350,200);
//      objs.push(couple2);
    
    //swing
    swing = new Swing();
    swing.transform(2000,345);
    objs.push(swing);
    
    //seesaw
    seesaw2 = new SeeSaw();
    seesaw2.transform(2400,125);
    objs.push(seesaw2);
    
    //player
    player = new Person();
    player.transform(canvas.width/2,canvas.width/8);
    
    DrawScene();
    
}

function Display(object) {
    let ctx = board.GetContext();
   if (animation) {
       object.Next();
   }
   object.display(board);
}

function DrawScene(){
    let ctx = board.GetContext();
    board.ClearBoard();
    ctx.save();

    objs.forEach(Display);
    dynamics.forEach(Display);

     ctx.restore();

     Display(player);
}

function Move(speed){
    for(let i=0;i < objs.length;i++){
        objs[i].transform(speed);
    }
}

function DoAnimation(){
    DrawScene();
    if (animation) {
	  setTimeout(DoAnimation, 20);
     }
}

function Keypress(event){
    switch(event.key){
        case 'a': // move left
            if(ground.GetCX() < SCENE_WIDTH/2)
                Move(PLAYER_SPEED);
            break;
        case 'd': // move right
            if(-ground.GetCX() < SCENE_WIDTH/2-500)
                Move(-PLAYER_SPEED);
            break;
        case 'g': //turn on animation
            if (animation != true) {
	           animation = true;
	           setTimeout(DoAnimation, 20);
	       }
            break;
        case 's': //turn off animation
            animation = false;
            break;
    }
    DrawScene();
}
