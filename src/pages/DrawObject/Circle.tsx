import { CircleDraw } from '../component/CircleDraw';
import { DrawObject } from './DrawObject';

export class Circle extends DrawObject {
  constructor() {
    super();
    this.addComponent(CircleDraw);
  }
  public set radius(r: number) {
    const circleDraw = this.getComponent(CircleDraw);
    if (circleDraw) {
      circleDraw.radius = r;
    }
  }
  public get radius() {
    const circleDraw = this.getComponent(CircleDraw);
    return circleDraw?.radius || 0;
  }
  public drawTo(context: CanvasRenderingContext2D): void {
    this.getComponents().forEach((component) => {
      component.onUpdate?.(context);
    });
  }
}
