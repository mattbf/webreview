import React, {useState, useEffect} from 'react';
import useWindowSize from '../useWindowSize.js';
import DetectClientInfo from '../DetectClientInfo.js';


//The Editor will hold all state, information, and logical functions in order
// to manipulate state and components
//ex State, Userinfo, Project Data, Comments/Markups

const ProjectData = [

]

const UserInfo = [

]


function Editor() {
  const [state, setState] = useState({

  })
  const [responsiveWidth, setResponsiveWidth] = useState('300px')
  const [responsiveHeight, setResponsiveHeight] = useState('500px')
  const windowSize = useWindowSize()
  const {browserName, majorVersion, OSName} = DetectClientInfo()
  // need to pass a ref to the iframe in order to get client width and height
  const [clientInfo, setClientInfo] = useState({
    clientWidth: null,
    clientHeight: null,
    allowableWidth: 50,
    allowableHeight: windowSize.height,
    browser: browserName,
    version: majorVersion,
    os: OSName,
  })

  useEffect(() => {
    setClientInfo({
      clientWidth: null, //webWindow.current.clientWidth,
      clientHeight: null, //webWindow.current.clientHeight,
      allowableWidth: windowSize.width,
      allowableHeight: windowSize.height,
      browser: browserName,
      version: majorVersion,
      os: OSName,
      scroll: null, //webWindow.current.scrollTop,
    })
  }, [windowSize, responsiveHeight, responsiveWidth]) //add webwindow

  return (
    <div>
      Editor
    </div>
  )
}

export default Editor
