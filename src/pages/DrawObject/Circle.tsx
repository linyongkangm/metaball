import { CircleDraw } from '../component/CircleDraw';
import { Movable } from '../component/Movable';
import { DrawObject } from './DrawObject';

export class Circle extends DrawObject {
  constructor() {
    super();
    this.addComponent(Movable);
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
}
