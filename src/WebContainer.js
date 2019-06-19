import React from 'react';
import Iframe from 'react-iframe'
// var url = data.url + "&output=embed";
// window.location.replace(url);

function WebContainer() {
  return (
    <div>
      <Iframe
        url="http://www.google.com&output=embed"
        src="http://www.google.com&output=embed"
        width="500px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        sandbox="allow-same-origin allow-forms"
        scrolling
      />
    </div>
  );
}

export default WebContainer;
