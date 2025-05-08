import { BASE_HEIGHT, BASE_WIDTH } from './constants';
import { debounce, isMobile } from './miscellaneous';

const resizeScreen = debounce(() => {
  const bodyElement = document.body as HTMLBodyElement;
  const scale = Math.min(
    window.innerWidth / BASE_WIDTH,
    window.innerHeight / BASE_HEIGHT,
  );
  const mobile = isMobile();
  const finalScale = mobile ? 1 : scale >= 1 ? scale : scale;

  const applyZoom =
    window.innerWidth < BASE_WIDTH
      ? Math.round((window.innerWidth / BASE_WIDTH) * 100)
      : 100;

  bodyElement.setAttribute(
    'style',
    `zoom: ${applyZoom}%; transform: scale(${finalScale});`,
  );
}, 100);
