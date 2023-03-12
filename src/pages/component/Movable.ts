import { randomInt } from '../randomPlus';
import { Component } from './Component';

export class Movable extends Component {
  public rateX = randomInt(-3, 3);
  public rateY = randomInt(-3, 3);
  public onBeforeUpdate(context: CanvasRenderingContext2D): void {
    if (this.entity?.x !== undefined) {
      if (this.entity.x >= context.canvas.width || this.entity.x <= 0) {
        this.rateX = -this.rateX;
      }
      this.entity.x += this.rateX;
    }
    if (this.entity?.y !== undefined) {
      if (this.entity.y >= context.canvas.height || this.entity.y <= 0) {
        this.rateY = -this.rateY;
      }
      this.entity.y += this.rateY;
    }
  }
}
