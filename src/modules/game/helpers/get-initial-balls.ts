import COLORS_BALLS from '@/modules/common/helpers/colors';
import type { Balls, TubesType } from '@/modules/common/interfaces/common';

export default function getInitialBalls(tubes: TubesType): Balls[] {
  return Object.entries(tubes).flatMap(
    ([tube, { balls = [] }], tubeIndex: number) => {
      return balls.map<Balls>((ball, index: number) => ({
        index: index + tubeIndex,
        indexTube: +tube,
        incognito: ball.incognito || false,
        animate: false,
        positionTube: index,
        color: ball.value,
        colors: COLORS_BALLS[ball.value],
      }));
    },
  );
}
