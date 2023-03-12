import { Component } from './Component';

export class CircleDraw extends Component {
  public radius: number = 0;
  public onUpdate(context: CanvasRenderingContext2D) {
    if (this.entity) {
      context.strokeStyle = 'green';
      context.beginPath();
      context.arc(this.entity.x, this.entity.y, this.radius, 0, 2 * Math.PI);
      context.stroke();
    }
  }
}
