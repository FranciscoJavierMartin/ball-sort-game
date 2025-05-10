import type {
  Balls,
  TestTubes,
  TubeDistribution,
} from '@/modules/common/interfaces/common';

function validateLastTubeHelp(
  testTubes: TestTubes[],
  balls: Balls[],
  capacity: number,
) {
  const lastTube = testTubes[testTubes.length - 1];
  const totalTubesFill = [...new Set(balls.map((v) => v.color))].length;
  const totalTUbes = testTubes.length;
}

export default function getInitialTubeDistribution({
  balls,
  capacity,
  distribution,
  testTubes,
}: {
  balls: Balls[];
  capacity: number;
  distribution: number[];
  testTubes: TestTubes[];
}): TubeDistribution {
  const minumumTubeValue = validateLastTubeHelp(testTubes, balls, capacity);
}
