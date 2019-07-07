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
  const [responsiveWidth, setResponsiveWidth] = useState('414px')
  const [responsiveHeight, setResponsiveHeight] = useState('896px')
  const windowRef = useRef()
  const windowSize = useWindowSize()
  const {browserName, majorVersion, OSName} = DetectClientInfo()
  console.log(browserName + majorVersion + OSName)
  const screenSizes = [
    {
      name: 'fit',
      width: '100%',
      height: '100%',
    },
    {
      name: 'desktop',
      width: '1024px',
      height: '768px',
    },
    {
      name: 'iphone8',
      width: '275px',
      height: '600px',
    },
  ]

  function selectScreenSize(event) {
    // console.log("screen size changed")
    // console.log(event.target.value)
    // console.log(event.target)
    var selectedScreen = screenSizes.find(function(element) {
    return element.name == event.target.value;
    });
    // console.log(selectedScreen)
    setResponsiveWidth(selectedScreen.width)
    setResponsiveHeight(selectedScreen.height)
  }
  //convert iframe width and height to px
  // if (responsiveWidth.endsWith("%")) {
  //     const iframeDim = {
  //       width: windowSize.width * Integer.parseInt(responsiveWidth)/100
  //     }
  // } else {
  //   const iframeDim = {
  //     width: responsiveWidth,
  //     height: responsiveHeight
  //   }
  // }

  const iframeDim = {
    width: responsiveWidth.endsWith("%") ? windowSize.width * parseInt(responsiveWidth)/100 : responsiveWidth,
    height: responsiveHeight.endsWith("%") ? windowSize.height * parseInt(responsiveHeight)/100 : responsiveHeight,
  }

  function SetWidth() {
    setResponsiveWidth('100%')
    setResponsiveHeight('25%')
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
      clientWidth: iframeDim.width,
      clientHeight: iframeDim.height,
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
      <select onChange={selectScreenSize}>
        <option> hello </option>
        {screenSizes.map((screen, index) =>
          <option key={index} value={screen.name}> {screen.name} {screen.width}  {screen.height} </option>
        )}
      </select>
      <DrawArea/>

    </div>
  );
}

export default WebContainer;
