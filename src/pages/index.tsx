import { useEffect, useRef } from 'react';
import { Circle } from './DrawObject/Circle';
import { randomInt } from './randomPlus';

function drawBackground(context: CanvasRenderingContext2D) {
  context.fillStyle = 'black';
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
}

function requestAnimationFrameDraw(draw: () => void) {
  const render = () => {
    draw();
    requestAnimationFrame(render);
  };
  render();
}

function injectMovement() {}

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!context) {
      return;
    }
    const circles = Array.from({ length: randomInt(5, 10) }).map(() => {
      const minR = 30;
      const maxR = 80;
      const circle = new Circle();
      circle.x = randomInt(0 + maxR, canvas.width - maxR);
      circle.y = randomInt(0 + maxR, canvas.height - maxR);
      circle.radius = randomInt(minR, maxR);
      return circle;
    });
    requestAnimationFrameDraw(() => {
      drawBackground(context);
      circles.forEach((circle) => {
        circle.drawTo(context);
      });
    });
  }, [canvasRef]);
  return <canvas ref={canvasRef} width={500} height={500}></canvas>;
}
