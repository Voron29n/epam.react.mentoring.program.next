import { RefObject, useEffect, useState } from 'react';

export const useHovering = (ref: RefObject<HTMLDivElement>) => {
  const [isHovering, setHovering] = useState<boolean>(false);

  const on: () => void = () => setHovering(true);
  const off: () => void = () => setHovering(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const node = ref.current;

    node.addEventListener('mouseenter', on);
    node.addEventListener('mousemove', on);
    node.addEventListener('mouseleave', off);

    return () => {
      node.removeEventListener('mouseenter', on);
      node.removeEventListener('mousemove', on);
      node.removeEventListener('mouseleave', off);
    };
  }, [ref]);

  return isHovering;
};
