import { Component } from '../component/Component';

export abstract class DrawObject {
  public x: number = 0;
  public y: number = 0;
  public abstract drawTo(context: CanvasRenderingContext2D): void;
  private components: Component[] = [];
  public addComponent(component: Component) {
    if (!this.components.find((comp) => Object.getPrototypeOf(comp) === Object.getPrototypeOf(component))) {
      this.components.push(component);
    }
  }
}
