class MovingObject {
    constructor(hash) {
      for(let key in hash){
        this[key] = hash[key];
      }
      // this.pos = hash.pos;
      // this.vel = hash.vel;
      // this.radius = hash.radius;
      // this.color = hash.color;
    }
    draw(ctx) {
      // let that = this;
      // debugger;
      ctx.beginPath();
      // debugger;
      let x = this.pos[0];
      let y = this.pos[1];
      let r = this.radius;
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fillStyle = this.color;
    }
  }
  export default MovingObject;
  // module.exports = MovingObject;