import React, {useState, useEffect, useRef} from 'react';
import Iframe from 'react-iframe'
import DrawArea from './Drawing/DrawArea.js';
import ContentInfoCard from './ContentInfoCard.js';
import useWindowSize from  './useWindowSize.js';
// var url = data.url + "&output=embed";
// window.location.replace(url);
import {
  Button,
  Input,
} from '@material-ui/core'


function WebContainer() {
  const [responsiveWidth, setResponsiveWidth] = useState('500px')
  const windowRef = useRef()
  const windowSize = useWindowSize()
  function SetWidth() {
    setResponsiveWidth('100%')
  }

  const passedUrl = "https://frame.io" // must use double quotes
  var url = "https://bypasscors.herokuapp.com/api/?url=" + encodeURIComponent(passedUrl);

  //const webWindow = document.getElementById("webwindow").contentWindow;
  const webWindow2 = windowRef;
  // if (webWindow2.current) {
  //   console.log(webWindow2.current)
  // }
  //console.log(webWindow2)

  const [windowData, setWindowData] = useState({
    clientWidth: null,
    clientHeight: null,
    allowableWidth: 50,
  })

  useEffect(() => {
    setWindowData({
      clientWidth: webWindow2.current.clientWidth,
      clientHeight: webWindow2.current.clientHeight,
      allowableWidth: windowSize.width,
      allowableHeight: windowSize.height,
    })
  }, [webWindow2, windowSize])


  return (
    <div>
      <iframe
        title="Inline Frame Example"
        url="http://google.com/"
        src={passedUrl}
        width={responsiveWidth}
        height="450px"
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
