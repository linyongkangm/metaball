import { DrawObject } from '../DrawObject/DrawObject';

export class Component {
  public entity?: DrawObject;
  public onUpdate?(context: CanvasRenderingContext2D): void;
}
