import React, { useState } from 'react';
import ChevronLeftSharpIcon from '@mui/icons-material/ChevronLeftSharp';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import Img1 from "../Assets/Sli_Img_1.jpg";
import Img2 from "../Assets/Sli_Img_2.avif";
import Img3 from "../Assets/SLi_Img_3.jpg";
import './Styles/Slider.scss';

export default function Slider() {
    const [Slider, SetSlider] = useState(0);
    const Arr = [Img1, Img2, Img3];
    function Slider_change_right() {
        if (Slider > 1) {SetSlider(0) }
        else { SetSlider(Slider + 1) }
    }
    function Slider_change_left() {
        if (Slider == 0) {SetSlider(2) }
        else { SetSlider(Slider - 1) }
        console.log(Slider)
    }
    // setTimeout(() => Slider_change(), 4000);
    // Enable it during Deploy
  return (
      <div className='flx SA788'>
          <div className='left_sli' onClick={Slider_change_left}><ChevronLeftSharpIcon fontSize='large'/></div>
          <img src={Arr[Slider]} className="IM88" />
          <div className='left_sli' onClick={Slider_change_right}><ChevronRightSharpIcon fontSize='large'/></div>
      </div>
      
  )
}
