import React, {useEffect, useState} from 'react'

function useFrameSize(props) {
  const isClient = typeof window === 'object';
  const frameRef = props
  console.log(props)

  function getSize() {
    return {
      width: 50, //frameRef.current.clientWidth,
      height: 50 //frameRef.current.clientHeight,
    };
  }

  const [frameSize, setFrameSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setFrameSize(getSize());
    }
    frameRef.addEventListener('resize', handleResize);
    return () => frameRef.removeEventListener('resize', handleResize);

  }, []); // Empty array ensures that effect is only run on mount and unmount

  return frameSize;
}

export default useFrameSize
