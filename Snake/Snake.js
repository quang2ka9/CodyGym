class Vector2d{
    constructor(x,y) {
        this.x=x
        this.y=y
    }
}
//khởi tạo con rắn
class  Snake {
    constructor() {
        this.body = [
            //phần thân của con rắn gồm 3 đốt, phần tử đầu tiên trong mảng là đầu của con rắn.
            new Vector2d(UNIT*10, UNIT * 5),
            new Vector2d(UNIT*11, UNIT * 5),
            new Vector2d(UNIT*12 , UNIT * 15),
        ]
        this.head = this.body[0]
        this.speed = new Vector2d(1, 0)
    }

    //hàm vẽ
    draw() {
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.body[0].x, this.body[0].y, UNIT, UNIT);
        ctx.fillStyle = 'Lime'
        for (let i = 1; i < this.body.length; i++) {
            ctx.fillRect(this.body[i].x, this.body[i].y, UNIT, UNIT)
        }
    }
    //hàm xóa
    clear() {
        ctx.fillStyle = 'black'
        ctx.fillRect(this.body[0].x, this.body[0].y, UNIT, UNIT)
        ctx.fillStyle = 'black'
        for (let i = 1; i < this.body.length; i++) {
            ctx.fillRect(this.body[i].x, this.body[i].y, UNIT, UNIT)
        }
    }
    //va chạm vào viền
    handleBound(){
        if(this.head.x<0 || this.head.x> 600- UNIT){
            this.head.x = alert('game over');
        }
        if(this.head.y<0 || this.head.y> 600- UNIT){
            this.head.y = alert('game over');
        }
    }
    //di chuyển con rắn
    move() {
        this.clear()
        for (let i = this.body.length - 1; i >= 1; i--) {
            this.body[i].x = this.body[i - 1].x
            this.body[i].y = this.body[i - 1].y
        }
        this.body[0].x += this.speed.x * UNIT
        this.body[0].y += this.speed.y * UNIT
        this.handleBound()
        this.draw()
    }
    //kiểm tra ăn mồi
    checkEat(food){
        let head = this.body[0]
        return food.x === head.x && food.y === head.y
    }
    grow(){
        //tăng thêm một chiều dài cho rắn
        this.clear()
        let snakeLength = this.body.length
        let mountX = this.body[snakeLength - 1].x - this.body[snakeLength - 2].x
        let mountY = this.body[snakeLength - 1].y - this.body[snakeLength - 2].y
        let newPart = new Vector2d(
            this.body[snakeLength-1].x + mountX,
            this.body[snakeLength-1].y + mountY,
        )
        this.body.push(newPart)
        this.draw()
    }
}