import { useRef } from 'react';

const useRenderCount = () => {
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;
  return renderCountRef.current;
};

export default useRenderCount;
