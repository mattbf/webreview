import React, {useState} from 'react';
import { ChromePicker } from 'react-color';
import { CustomPicker } from 'react-color';

function MyColorPicker() {
  const [pickerOpen, setPickerOpen] = useState(false)
  // state = {
  //   displayColorPicker: false,
  // };
  function handleClick() {
    setPickerOpen(!pickerOpen)
  }
  function handleClose() {
    setPickerOpen(false)
  }
  // handleClick = () => {
  //   this.setState({ displayColorPicker: !this.state.displayColorPicker })
  // };
  //
  // handleClose = () => {
  //   this.setState({ displayColorPicker: false })
  // };
  const popover = {
    position: 'absolute',
    zIndex: '2',
  }
  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  }
  return (
    <div>
      <button onClick={handleClick}>Pick Color</button>
      { pickerOpen ? <div style={ popover }>
        <div style={ cover } onClick={handleClose}/>
        <ChromePicker />
      </div> : null }
    </div>
  )
}

export default CustomPicker(MyColorPicker);
