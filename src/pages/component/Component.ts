import { DrawObject } from '../DrawObject/DrawObject';

export class Component {
  public entity?: DrawObject;
  public onLoad?(context: CanvasRenderingContext2D): void;
  public onBeforeUpdate?(context: CanvasRenderingContext2D): void;
  public onUpdate?(context: CanvasRenderingContext2D): void;
}
