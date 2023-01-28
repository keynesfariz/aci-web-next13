import { useEffect, useState } from 'react';

export enum ScrollDirections {
  UP,
  DOWN,
}

const useScrollDirection = (
  defaultScrollDirection: ScrollDirections = ScrollDirections.UP,
) => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirections>(
    defaultScrollDirection,
  );

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction =
        scrollY > lastScrollY ? ScrollDirections.DOWN : ScrollDirections.UP;
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
};

export default useScrollDirection;
