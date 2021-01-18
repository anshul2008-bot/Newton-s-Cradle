// class Rope {

//     constructor(body1, body2, offsetX, offsetY) {

//         this.offsetX = offsetX
//         this.offsetY = offsetY
//         var options = {
//             bodyA: body1,
//             bodyB: body2,
//             stiffness: 1,
//             length:350,
//             pointB: { x: offsetX, y: offsetY }
//         }

//         this.rope = Constraint.create(options);
//         World.add(world, this.rope);
//     }

//     display() {
//         var point1 = this.rope.bodyA.position;
//         var point2 = this.rope.bodyB.position;
//         strokeWeight(4);

//         var attachPointX = point2.x + this.offsetX;
//         var attachPointY = point2.y + this.offsetY;

//         line(point1.x,point1.y,attachPointX,attachPointY)
       


//     }
// }






class Rope {
    constructor(body1, body2, xOffset , yOffset){
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        var options ={
            bodyA : body1,
            bodyB: body2,
            stiffness: 1,
            length:350,
           pointA:{x: this.xOffset, y: this.yOffset } 
        }
    this.rope = Constraint.create(options)
    World.add(world, this.rope);
    }
    display(){
        var point1 = this.rope.bodyA.position
        var point2 = this.rope.bodyB.position
        strokeWeight(4)
        var attachPointX = point1.x + this.xOffset
        var attachPointY = point1.y + this.yOffset
        line(point2.x,point2.y,attachPointX,attachPointY)
    }
    }