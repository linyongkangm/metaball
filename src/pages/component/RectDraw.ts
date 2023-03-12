import { Component } from './Component';

export class RectDraw extends Component {
  public width: number = 0;
  public height: number = 0;
  public onUpdate(context: CanvasRenderingContext2D) {
    if (this.entity) {
      context.beginPath();
      context.strokeStyle = 'grey';
      context.rect(this.entity.x, this.entity.y, this.width, this.height);
      context.stroke();
    }
  }
}
