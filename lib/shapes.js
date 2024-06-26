class Shape{

    constructor(){
        this.color=''
    }
    SetColor (color){
        this.color=(color);
    }
}

class Square extends Shape{
    render(){
        return `<rect x="50" height="200 width="200 fill="${this.color}"></rect>`;
    }
}
class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"></circle>`;
    }
}
class Triangle extends Shape{
    render(){
        return `<polygon Height="100%" width="100%" Points="0,200 300, 200 150, 0" fill="${this.color}"></polygon>`;
    }
}

module.exports = {Shape, Circle, Square, Triangle}
