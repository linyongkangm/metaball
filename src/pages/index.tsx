import { useEffect, useRef } from 'react';

function drawBackground(context: CanvasRenderingContext2D) {
  context.fillStyle = 'black';
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
}

function drawCircle(
  context: CanvasRenderingContext2D,
  params: {
    x: number;
    y: number;
    r: number;
  }
) {
  context.strokeStyle = 'green';
  context.beginPath();
  context.arc(params.x, params.y, params.r, 0, 2 * Math.PI);
  context.stroke();
}

function requestAnimationFrameDraw(draw: () => void) {
  const render = () => {
    draw();
    requestAnimationFrame(render);
  };
  render();
}

function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = 1; i < result.length; i++) {
    const random = Math.floor(Math.random() * (i + 1));
    [result[i], result[random]] = [result[random], result[i]];
  }
  return result;
}
function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
function randomInt(min: number, max: number) {
  return Math.round(randomNumber(min, max));
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
      return {
        x: randomInt(0 + maxR, canvas.width - maxR),
        y: randomInt(0 + maxR, canvas.height - maxR),
        r: randomInt(minR, maxR),
      };
    });
    requestAnimationFrameDraw(() => {
      drawBackground(context);
      circles.forEach((circle) => {
        drawCircle(context, circle);
      });
    });
  }, [canvasRef]);
  return <canvas ref={canvasRef} width={500} height={500}></canvas>;
}
