import React from 'react';
import useWindowSize from './useWindowSize.js';
import DetectClientInfo from './DetectClientInfo.js';


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

    </div>
  )
}

export default Editor
