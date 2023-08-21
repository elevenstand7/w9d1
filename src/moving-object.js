class MovingObject {
    constructor(hash) {
       for (let key in hash){
        this[key] = hash[key]
       }
    }

    draw(ctx) {
        

        ctx.beginPath();
        ctx.arc(this[pos][0], this[pos][1], this[radius], 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = this[color]
    }
}

export default MovingObject;
