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
              <img src={require("../../../core/images/2.jpeg")} alt="" />
              <img src={require("../../../core/images/4.jpeg")} alt="" />
              <img src={require("../../../core/images/6.jpeg")} alt="" />
              <img src={require("../../../core/images/7.jpeg")} alt="" />
            </div>
            <div className="custom-card">
              <div className="custom-card-bg">
                <img className='custom-card-bg-img' src={require("../../../core/images/birthday22/vintage2.png")} alt="" />
                <img className='flower' src={require("../../../core/images/birthday22/flower.png")} alt="" />
              </div>
              <div className="custom-card-body">
                <h2>HAPPY BIRTHDAY <br /> TO MY GREATEST LOVE</h2>
                <p>HAPPY 22ND BIRTHDAY BABY KOOO!!!! TIGULANG KANAAAA!!!! So it means pwede na ta makapakasal HAHAHAHAHAHA CHAR. Pero sa tuood2 baby thank you. Thank you for loving me, supporting me, caring me, TANAN2 THANKYOUU GD PALANGGA KOO!!! But the most important of all, thank you for appreciating me and for recognizing my worth. I know these past few days was tough for both of us. It made us fight and argue but I dont regret any of it because I know this will make us realize that fun and excitement isn't the only thing that bind us together, it is love and commitment. Even though we fight, I still know that everything will be okay because I know you will never leave my side. So thank you so much baby for putting up with me. I know that we dont hold the future, but I only know one thing for sure, <br /> <u>I WILL LOVE YOU FOR THE REST OF YOUR LIFE!</u></p>
                <p>P.S. GWAPA2 GD SIMO LANGGA YA HUHUHU SABAD AH GAKA TUNAW NA KO SIMO MGA TULOK!!!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="background sec2-bg">
            <img src={require("../../../core/images/birthday22/vintage-bg.jpg")} alt="" />
          </div>
          <div className="content section2-content">
            <h1 className="title">Our Journey</h1>
            <ul>
              <li>
                <div className="group">
                  <img src={require("../../../core/images/9.jpeg")} alt="" />
                  <div className="overlay"></div>
                  <h2>The Day when I said <br /> I LOVE YOU</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus esse accusamus harum magnam incidunt maxime consequatur distinctio iste delectus, ducimus inventore consequuntur alias tempore sunt nam voluptatibus! Iure, temporibus minus.</p>
                </div>
              </li>
              <li>
                <div className="group">
                  <img src={require("../../../core/images/11.jpeg")} alt="" />
                  <div className="overlay"></div>
                  <h2>Our First Unofficial Date!</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus esse accusamus harum magnam incidunt maxime consequatur distinctio iste delectus, ducimus inventore consequuntur alias tempore sunt nam voluptatibus! Iure, temporibus minus.</p>
                </div>
              </li>
              <li>
                <div className="group">
                  <img src={require("../../../core/images/12.jpeg")} alt="" />
                  <div className="overlay"></div>
                  <h2>Our First DUO!</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus esse accusamus harum magnam incidunt maxime consequatur distinctio iste delectus, ducimus inventore consequuntur alias tempore sunt nam voluptatibus! Iure, temporibus minus.</p>
                </div>
              </li>
              <li>
                <div className="group">
                  <img src={require("../../../core/images/5.jpeg")} alt="" />
                  <div className="overlay"></div>
                  <h2>LDR First Strike!</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus esse accusamus harum magnam incidunt maxime consequatur distinctio iste delectus, ducimus inventore consequuntur alias tempore sunt nam voluptatibus! Iure, temporibus minus.</p>
                </div>
              </li>
              <li>
                <div className="group">
                <video width="400" height="300" controls>
                  <source src={require("../../../core/videos/1.mp4")} type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
                  <div className="overlay"></div>
                  <h2>ZXCASDASSAD!!!</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus esse accusamus harum magnam incidunt maxime consequatur distinctio iste delectus, ducimus inventore consequuntur alias tempore sunt nam voluptatibus! Iure, temporibus minus.</p>
                </div>
              </li>
              <li>
                <div className="group">
                <video width="400" height="300" controls>
                  <source src={require("../../../core/videos/2.mp4")} type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
                  <div className="overlay"></div>
                  <h2>The Moment I know that You dont want to Lose ME</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus esse accusamus harum magnam incidunt maxime consequatur distinctio iste delectus, ducimus inventore consequuntur alias tempore sunt nam voluptatibus! Iure, temporibus minus.</p>
                </div>
              </li>
              <li>
                <div className="group">
                  <img src={require("../../../core/images/13.png")} alt="" />
                  <div className="overlay"></div>
                  <h2>FINALLY! IT'S OFFICIAL!</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus esse accusamus harum magnam incidunt maxime consequatur distinctio iste delectus, ducimus inventore consequuntur alias tempore sunt nam voluptatibus! Iure, temporibus minus.</p>
                </div>
              </li>
              <li>
                <div className="group">
                <video width="400" height="300" controls>
                  <source src={require("../../../core/videos/3.mp4")} type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
                  <div className="overlay"></div>
                  <h2>1ST MONTHSARY!!!</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus esse accusamus harum magnam incidunt maxime consequatur distinctio iste delectus, ducimus inventore consequuntur alias tempore sunt nam voluptatibus! Iure, temporibus minus.</p>
                </div>
              </li>
              <li>
                <div className="group">
                  <div className="overlay"></div>
                  <h2>MORE TO COME SOON!</h2>
                  <p>Wala na ko oras bi langga sa sunod ko lng ni pang butangan pa gd</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="background">
            <img src={require("../../../core/images/birthday22/plain-bg.jpg")} alt="" />
          </div>
          <div className="content section3-content">
            <h1 className='title'>BLOOPEERSSSSS!!!!!!</h1>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Birthday22IndexView;