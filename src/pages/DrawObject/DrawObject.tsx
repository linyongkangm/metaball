export abstract class DrawObject {
  public x: number = 0;
  public y: number = 0;
  public abstract drawTo(context: CanvasRenderingContext2D): void;
}
