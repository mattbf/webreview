import React, {useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
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


const useStyles = makeStyles(theme => ({
  root: {
  },
  window: {

    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '400px',
    border: 'solid',
  }
}));


function WebContainer(props) {
  const classes = useStyles()
  const mode = props.mode
  const [responsiveWidth, setResponsiveWidth] = useState('300px')
  const [responsiveHeight, setResponsiveHeight] = useState('500px')
  const windowRef = useRef()
  const windowSize = useWindowSize()
  const {browserName, majorVersion, OSName} = DetectClientInfo()
  //console.log(browserName + majorVersion + OSName)
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

  // const iframeDim = {
  //   width: responsiveWidth.endsWith("%") ? windowSize.width * parseInt(responsiveWidth)/100 : responsiveWidth,
  //   height: responsiveHeight.endsWith("%") ? windowSize.height * parseInt(responsiveHeight)/100 : responsiveHeight,
  // }

  function SetWidth() {
    setResponsiveWidth('100%')
    setResponsiveHeight('25%')
  }

  const passedUrl = "https://frame.io" // must use double quotes
  var url = "https://bypasscors.herokuapp.com/api/?url=" + encodeURIComponent(passedUrl);

  //const webWindow = document.getElementById("webwindow").contentWindow;
  const webWindow = windowRef;
  if (webWindow.current) {
    console.log(webWindow.current.contentWindow)
    console.log(webWindow.current)
    //url of iframe
    //console.log(webWindow.current.contentWindow.location.href)
    console.log(webWindow.current.scrollHeight)
    console.log(webWindow.current.innerHeight)
    console.log(webWindow.current.scrollTop)
    console.log(webWindow.scrollY)
    // console.log(webWindow.current.scrollTop)
    // console.log(webWindow.current.scrollTop)

  }


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
      clientWidth: webWindow.current.clientWidth,
      clientHeight: webWindow.current.clientHeight,
      allowableWidth: windowSize.width,
      allowableHeight: windowSize.height,
      browser: browserName,
      version: majorVersion,
      os: OSName,
      scroll: webWindow.current.scrollTop,
    })
  }, [webWindow, windowSize, responsiveHeight, responsiveWidth])


  return (
    <div>
      <div className={classes.window}>
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
        <select onChange={selectScreenSize}>
          <option> hello </option>
          {screenSizes.map((screen, index) =>
            <option key={index} value={screen.name}> {screen.name} {screen.width}  {screen.height} </option>
          )}
        </select>
        <DrawArea mode={mode} w={responsiveWidth} h={responsiveHeight}/>
      </div>
      <ContentInfoCard props={windowData}/>
    </div>
  );
}

export default WebContainer;
