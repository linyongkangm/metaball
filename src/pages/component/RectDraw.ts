import { Component } from './Component';

export class RectDraw extends Component {
  public width: number = 0;
  public height: number = 0;
  public anchorX = 0.5;
  public anchorY = 0.5;
  public onUpdate(context: CanvasRenderingContext2D) {
    if (this.entity) {
      context.beginPath();
      context.strokeStyle = 'grey';
      context.rect(
        this.entity.x - this.width * this.anchorX,
        this.entity.y - this.height * this.anchorY,
        this.width,
        this.height
      );
      context.stroke();
    }
  }
}
