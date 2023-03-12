import { Rect } from '../drawObject/Rect';
import { Component } from './Component';
import { RectDraw } from './RectDraw';

function weightWithCircles(
  point: {
    x: number;
    y: number;
  },
  circles: { x: number; y: number; radius: number }[]
) {
  const { x, y } = point;
  const result = circles.reduce((prev, current) => {
    const radius2 = Math.pow(current.radius, 2);
    const xDiff2 = Math.pow(x - current.x, 2);
    const yDiff2 = Math.pow(y - current.y, 2);
    return prev + radius2 / (xDiff2 + yDiff2);
  }, 0);
  return result;
}

export class Metaball extends Component {
  private drawBlock = false;
  public coverage(circles: { x: number; y: number; radius: number }[]) {
    const entity = this.entity as Rect;
    if (entity) {
      const x = entity.x - entity.width / 2;
      const y = entity.y - entity.height / 2;
      const result = weightWithCircles({ x, y }, circles);
      this.drawBlock = result >= 1;
    }
  }
  public onUpdate(context: CanvasRenderingContext2D): void {
    const entity = this.entity as Rect;
    const rectDraw = entity?.getComponent(RectDraw);
    if (rectDraw && this.drawBlock) {
      const { x, y } = this.entity as Rect;
      const { width, height, anchorX, anchorY } = rectDraw;
      const leftTopX = x - width * anchorX;
      const leftTopY = y - height * anchorY;
      context.beginPath();
      context.strokeStyle = 'red';
      context.arc(leftTopX, leftTopY, 5, 0, 2 * Math.PI);
      context.stroke();
    }
  }
}
