import { RectDraw } from '../component/RectDraw';
import { DrawObject } from './DrawObject';

export class Rect extends DrawObject {
  constructor() {
    super();
    this.addComponent(RectDraw);
  }
  public set width(width: number) {
    const rectDraw = this.getComponent(RectDraw);
    if (rectDraw) {
      rectDraw.width = width;
    }
  }
  public get radius() {
    const rectDraw = this.getComponent(RectDraw);
    return rectDraw?.width || 0;
  }
  public set height(height: number) {
    const rectDraw = this.getComponent(RectDraw);
    if (rectDraw) {
      rectDraw.height = height;
    }
  }
  public get height() {
    const rectDraw = this.getComponent(RectDraw);
    return rectDraw?.height || 0;
  }
}
