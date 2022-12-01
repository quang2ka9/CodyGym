class Food{
    constructor(x,y) {
        this.x = x
        this.y = y
    }
    draw(){
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, UNIT, UNIT)
    }
    clear(){
        ctx.fillStyle = 'black'
        ctx.fillRect(this.x, this.y, UNIT, UNIT)
    }
    //số ngẫu nhiên
    getRandomNumber(){
        let randomNumber = Math.floor(Math.random() * 600)
        randomNumber -= randomNumber % UNIT
        return randomNumber
    }
    //sinh ra mồi mới
    spawn(){
        this.clear()
        this.x = this.getRandomNumber()
        this.y = this.getRandomNumber()
        this.draw()
    }
}