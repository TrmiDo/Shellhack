let canvas= document.getElementById("canvas");
let context=canvas.getContex("2d");
let shapes=[];
shapes.push({x: 2000, y: 0, width: 200, height: 200, color: 'red'});
shapes.push({x: 0, y: 0, width: 20, height: 20, color: 'blue'});

let draw_shapes =function() {
    context.clearRect(0,0, canvas_width,canvas_height);
    for (let shape of shapes){
        context.fillStyle=shapes.color;
        context.fillRect(shape.x,shape.y, shape.width, shape.height);
    }

}
draw_shapes();