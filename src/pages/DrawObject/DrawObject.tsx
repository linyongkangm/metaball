import { Component } from '../component/Component';

export abstract class DrawObject {
  public x: number = 0;
  public y: number = 0;
  public abstract drawTo(context: CanvasRenderingContext2D): void;
  protected components = new Map<typeof Component, Component>();
  public addComponent(Comp: typeof Component) {
    this.removeComponent(Comp);
    const comp = new Comp();
    comp.entity = this;
    this.components.set(Comp, comp);
  }
  public removeComponent(Comp: typeof Component) {
    const comp = this.getComponent(Comp);
    if (comp) {
      comp.entity = undefined;
      this.components.delete(Comp);
    }
  }
  public getComponent<T extends typeof Component>(Comp: T): InstanceType<T> | undefined {
    return this.components.get(Comp) as InstanceType<T>;
  }
  public getComponents() {
    return new Array(...this.components.values());
  }
}
