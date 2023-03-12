import { useEffect, useRef } from 'react';
import { Circle } from './drawObject/Circle';
import { Rect } from './drawObject/Rect';
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
    const rectSize = 50;
    const rects = Array.from({
      length: (canvas.width / rectSize) * (canvas.height / rectSize),
    }).map((_, index) => {
      const rect = new Rect();
      rect.width = rect.height = rectSize;
      const temp = index * rectSize;
      const x = temp % canvas.width;
      const y = Math.floor(temp / 500) * rectSize;
      rect.x = x;
      rect.y = y;
      return rect;
    });

    requestAnimationFrameDraw(() => {
      drawBackground(context);
      rects.forEach((rect) => {
        rect.drawTo(context);
      });
      circles.forEach((circle) => {
        circle.drawTo(context);
      });
    });
  }, [canvasRef]);
  return <canvas ref={canvasRef} width={500} height={500}></canvas>;
}
