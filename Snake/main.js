

let player = new Snake()
player.draw()
let food = new Food()
food.spawn()
setInterval(() =>{
    player.move()
    if (player.checkEat(food)){
        player.grow()
        food.spawn()
    }
},100);
//sự kiện bàn phím
const LEFT = 37
const UP = 38
const RIGHT = 39
const DOWN = 40

document.onkeydown = function (e){
    switch(e.keyCode){
        case LEFT:
            player.speed = new Vector2d(-1,0)
            break;
        case RIGHT:
            player.speed = new Vector2d(1,0)
            break;
        case UP:
            player.speed = new Vector2d(0,-1)
            break;
        case DOWN:
            player.speed = new Vector2d(0,1)
            break;
        default:
            break;
    }
}