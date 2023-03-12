import { Rect } from '../drawObject/Rect';
import { Component } from './Component';
import { RectDraw } from './RectDraw';

export class Metaball extends Component {
  private drawBlock = false;
  public coverage(circles: { x: number; y: number; radius: number }[]) {
    if (this.entity) {
      const x = this.entity.x;
      const y = this.entity.y;
      const result = circles.reduce((prev, current) => {
        const radius2 = Math.pow(current.radius, 2);
        const xDiff2 = Math.pow(x - current.x, 2);
        const yDiff2 = Math.pow(y - current.y, 2);
        return prev + radius2 / (xDiff2 + yDiff2);
      }, 0);
      this.drawBlock = result >= 1;
    }
  }
  public onUpdate(context: CanvasRenderingContext2D): void {
    const rectDraw = this.entity?.getComponent(RectDraw);
    if (this.entity && this.drawBlock && rectDraw) {
      const { x, y } = this.entity as Rect;
      const { width, height, anchorX, anchorY } = rectDraw;
      context.fillStyle = 'red';
      context.fillRect(x - width * anchorX, y - height * anchorY, width, height);
    }
  }
}
