class Quadrado{
    constructor(x, y, width, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.color = color;
    }


    drawColor(){
        fill(this.color);
        rect(this.x, this.y, this.width, this.width)
    }
    changeColor(newColor){
        this.color = newColor
    }
}
