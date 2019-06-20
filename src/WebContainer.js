import React, {useState} from 'react';
import Iframe from 'react-iframe'
// var url = data.url + "&output=embed";
// window.location.replace(url);
import {
  Button,
} from '@material-ui/core'


function WebContainer() {
  const [responsiveWidth, setResponsiveWidth] = useState('500px')
  function SetWidth() {
    setResponsiveWidth('1000px')
  }
  return (
    <div>
      <iframe
        title="Inline Frame Example"
        url="https://frame.io"
        src="https://frame.io"
        width={responsiveWidth}
        height="450px"
        id="myId"
        sandbox='allow-same-origin'

      />
      <Button onClick={SetWidth}> Large </Button>
    </div>
  );
}

export default WebContainer;
