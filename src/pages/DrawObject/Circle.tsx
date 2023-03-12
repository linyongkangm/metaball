import { DrawObject } from './DrawObject';

export class Circle extends DrawObject {
  public radius: number = 0;
  public drawTo(context: CanvasRenderingContext2D): void {
    context.strokeStyle = 'green';
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.stroke();
  }
}
