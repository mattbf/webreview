import React, {useState, useEffect, useRef} from 'react';
import Iframe from 'react-iframe'
import DrawArea from './Drawing/DrawArea.js';
import ContentInfoCard from './ContentInfoCard.js';
import useWindowSize from  './useWindowSize.js';
import useFrameSize from  './useFrameSize.js';
import DetectClientInfo from './DetectClientInfo.js';

// var url = data.url + "&output=embed";
// window.location.replace(url);
import {
  Button,
  Input,
} from '@material-ui/core'


function WebContainer() {
  const [responsiveWidth, setResponsiveWidth] = useState('500px')
  const [responsiveHeight, setResponsiveHeight] = useState('400px')
  const windowRef = useRef()
  const windowSize = useWindowSize()
  const {browserName, majorVersion, OSName} = DetectClientInfo()
  console.log(browserName + majorVersion + OSName)

  function SetWidth() {
    setResponsiveWidth('100%')
    setResponsiveHeight('200px')
  }

  const passedUrl = "https://frame.io" // must use double quotes
  var url = "https://bypasscors.herokuapp.com/api/?url=" + encodeURIComponent(passedUrl);

  //const webWindow = document.getElementById("webwindow").contentWindow;
  const webWindow2 = windowRef;

  function getSize() {
    return {
      width: webWindow2,
      height: webWindow2,
    };
  }

  const [frameSize, setFrameSize] = useState(getSize);

  // useEffect(() => {
  //
  //   function handleResize() {
  //     setFrameSize(getSize());
  //   }
  //   webWindow2.addEventListener('resize', handleResize);
  //   return () => webWindow2.removeEventListener('resize', handleResize);
  //
  // }, []);

  console.log(frameSize)

  const [windowData, setWindowData] = useState({
    clientWidth: null,
    clientHeight: null,
    allowableWidth: 50,
    allowableHeight: windowSize.height,
    browser: browserName,
    version: majorVersion,
    os: OSName,
  })

  useEffect(() => {
    setWindowData({
      clientWidth: responsiveWidth,
      clientHeight: responsiveHeight,
      allowableWidth: windowSize.width,
      allowableHeight: windowSize.height,
      browser: browserName,
      version: majorVersion,
      os: OSName,
    })
  }, [webWindow2, windowSize, responsiveHeight, responsiveWidth])


  return (
    <div>
      <iframe
        title="Inline Frame Example"
        url="http://google.com/"
        src={passedUrl}
        width={responsiveWidth}
        height={responsiveHeight}
        id="webwindow"
        ref={windowRef}
        // sandbox='allow-same-origin'

      />
      <ContentInfoCard props={windowData}/>
      <Button onClick={SetWidth}> Large </Button>
      <DrawArea/>

    </div>
  );
}

export default WebContainer;
