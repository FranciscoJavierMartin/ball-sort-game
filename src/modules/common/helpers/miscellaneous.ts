export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

export function isMobile(): boolean {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const debounce = (fn: Function, delay: number) => {
  let t: number;
  return function () {
    clearTimeout(t);
    t = setTimeout(fn, delay);
  };
};

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function isValidJson(json: string): boolean {
  let isValid: boolean;

  try {
    JSON.parse(json);
    isValid = true;
  } catch {
    isValid = false;
  }

  return isValid;
}

/**
 * Function that, given a color, returns a darker color.
 * @param color
 * @param percent
 * @returns
 */
export function lightenDarkenColor(color: string, percent: number) {
  let R: number = parseInt(color.substring(1, 3), 16);
  let G: number = parseInt(color.substring(3, 5), 16);
  let B: number = parseInt(color.substring(5, 7), 16);

  R = parseInt(((R * (100 + percent)) / 100).toString(), 10);
  G = parseInt(((G * (100 + percent)) / 100).toString(), 10);
  B = parseInt(((B * (100 + percent)) / 100).toString(), 10);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR =
    R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16);
  const GG =
    G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16);
  const BB =
    B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
}

/**
 * Function that generates a list of random indices for an array,
 * depending on the total number of random values ​​required and
 * the size of the array...
 * @param total
 * @param arraySize
 * @returns
 */
export const getUniqueRandomIndicesFromArray = (
  total: number,
  arraySize: number,
) => {
  const indices: number[] = [];
  let tmpCounter = 0;

  if (total <= arraySize) {
    do {
      const index = getRandomNumber(0, arraySize - 1);

      if (!indices.includes(index)) {
        indices.push(index);

        if (indices.length === total) {
          break;
        }
      }

      tmpCounter++;

      // Prevent it from getting into an infinite loop
      if (tmpCounter === 100) {
        break;
      }
    } while (1);
  }

  return indices;
};
