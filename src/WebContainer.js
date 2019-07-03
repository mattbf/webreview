import React, {useState} from 'react';
import Iframe from 'react-iframe'
import DrawArea from './Drawing/DrawArea.js';
// var url = data.url + "&output=embed";
// window.location.replace(url);
import {
  Button,
  Input,
} from '@material-ui/core'


function WebContainer() {
  const [responsiveWidth, setResponsiveWidth] = useState('500px')

  function SetWidth() {
    setResponsiveWidth('100%')
  }

  const passedUrl = "https://google.com" // must use double quotes
  var url = "https://bypasscors.herokuapp.com/api/?url=" + encodeURIComponent(passedUrl);
  return (
    <div>
      <iframe
        title="Inline Frame Example"
        url="http://google.com/"
        src={url}
        width={responsiveWidth}
        height="450px"
        id="myId"
        sandbox='allow-same-origin'

      />
      <Button onClick={SetWidth}> Large </Button>
      <DrawArea/>
    </div>
  );
}

export default WebContainer;
