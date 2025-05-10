import COLORS_BALLS from '@/modules/common/helpers/colors';
import type { Balls, TubesType } from '@/modules/common/interfaces/common';

export default function getInitialBalls(tubes: TubesType): Balls[] {
  let i: number = 0;

  return Object.entries(tubes).flatMap(([tube, { balls = [] }]) => {
    return balls.map<Balls>((ball, index: number) => ({
      index: i++,
      indexTube: +tube,
      incognito: ball.incognito || false,
      animate: false,
      positionTube: index,
      color: ball.value,
      colors: COLORS_BALLS[ball.value],
    }));
  });
}
