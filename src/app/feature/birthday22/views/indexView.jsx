import React, { Component } from 'react';
import '../stylesheets/index.scss';

class Birthday22IndexView extends Component {
  state = {  } 
  render() { 
    return (
      <div className="page" id="birthday22">
        <div className="section">
          <div className="background">
            <img src={require("../../../core/images/birthday22/crumpled-paper.jpg")} alt="" />
          </div>
          <div className="content section1-content d-flex justify-content-center">
            <div className="images">
              <img src={require("../../../core/images/1.jpeg")} alt="" />
            </div>
            <div className="custom-card">
              <div className="custom-card-bg">
                <img className='custom-card-bg-img' src={require("../../../core/images/birthday22/vintage2.png")} alt="" />
                <img className='flower' src={require("../../../core/images/birthday22/flower.png")} alt="" />
              </div>
              <div className="custom-card-body">
                <h1>HAPPY BIRTHDAY <br /> TO MY GREATEST LOVE</h1>
                <p>HAPPY 22ND BIRTHDAY BABY KOOO!!!! TIGULANG KANAAAA!!!! So it means pwede na ta makapakasal HAHAHAHAHAHA CHAR. Pero sa tuood2 baby thank you. Thank you for loving me, supporting me, caring me, TANAN2 THANKYOUU GD PALANGGA KOO!!! But the most important of all, thank you for appreciating me and for recognizing my worth. I know these past few days was tough for both of us. It made us fight and argue but I dont regret any of it because I know this will make us realize that fun and excitement isn't the only thing that bind us together, it is love and commitment. Even though we fight, I still know that everything will be okay because I know you will never leave my side. So thank you so much baby for putting up with me. I know that we dont hold the future, but I only know one thing for sure, <br /> <u>I WILL LOVE YOU FOR THE REST OF YOUR LIFE!</u></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Birthday22IndexView;