import React, { Component } from 'react';
import '../stylesheets/index.scss';
import { Carousel } from 'react-bootstrap';

class Birthday22IndexView extends Component {
  state = {  } 

  showBouquet = () => {
    document.querySelector(".section1-content .bouquete").classList.add('active')
  }

  hideBouquet = () => {
    document.querySelector(".section1-content .bouquete").classList.remove('active')
  }

  showJourneyCard = (e) =>{
    this.closeAllJourneyCards()
    var element = e.target
    var li = element.closest("li")
    li.querySelector(".group-content").classList.add('active')
  }

  pageHover = (e) => {
    var element = e.target
    
    // close journey carss
    if(element.dataset.journeycard !== "true" && element.dataset.journeysubcard !== "true"){
      this.closeAllJourneyCards()
    }
  }

  closeAllJourneyCards = () => {
    var groupContents = document.querySelectorAll(".section .section2-content ul li .group-content.active")
    
    groupContents.forEach(gc => {
      gc.classList.remove('active')
    })
  }

  render() { 
    return (
      <div className="page" id="birthday22" onMouseOver={this.pageHover}>
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
                <p>P.S. GWAPA2 GD SIMO LANGGA YA HUHUHU SABAD AH GAKA TUNAW NA KO SIMO MGA TULOK!!! AND FOR MY GIFT <span id='bouquete-span' onMouseEnter={this.showBouquet} onMouseOut={this.hideBouquet}>HOVER HERE</span></p>
                <div className="bouquete">
                  <h2>FLOWERS FOR YOU!! HEHEHEHHE</h2>
                  <img src={require("../../../core/images/birthday22/bouquote.png")} alt="" />
                </div>
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
                <div className="group" onMouseEnter={this.showJourneyCard} data-journeycard>
                  <img src={require("../../../core/images/11.jpeg")} alt="" />
                  <div className="overlay" data-journeysubcard></div>
                  <h2 data-journeysubcard>Our First Unofficial Date!</h2>
                </div>
                <div className="group-content">
                  <p>The night before that day, we talked about your ex. While I was listening, I can feel your pain and suffering that your ex put you through. I thought I only felt that because of your story, but no, I was feeling that because I know deep in my heart I already cared about you and I was starting to get feelings for you. I don't want my girl to get hurt by a scumbag 😡. So that's why I came up with the idea of "Jierah's Day", I want to show you how a real man should treat you. HAHAHA nakilig pa ko tuh sang ga hmbalanay ta nga "date ta bwas ah". I admit, I was actually overthinking that day hahaha I DIDN'T KNOW WHAT TO DO, WHAT TO GIVE YOU OR WHERE TO BRING YOU HAHAHA. However, my brilliant mind (char HAHAHAH) thought of a plan, either we go to Bantog or Bantayan, you know just TO EAT OR MA BOATINGG 🙄🙄🙄. OKAY, soooo fast forward, I picked you, we went to the shop accross riverside, and BY THE TIME NGA PAKADTO TA BANTOG BAWWWW NAG NGC NA LNG KAY HAMBAL NI MADAM 🙄🙄🙄 HAHAHHAHAHA pero sige na lng, pag abot ngc, nag order mix sus inom nanaman HAHAHAHHA. I started asking questions, you answered it, I explained a lot of things pero syempre dapat ma flirt man ko simo, so while I was talking sabay man ko kapot kamot, dayun hug hehehe after na gin dul ong tka and while I was driving back home I felt happy Like genuinely happy. It was the first time someone made me feel that way.</p>
                </div>
              </li>
              <li>
                <div className="group" onMouseEnter={this.showJourneyCard} data-journeycard>
                  <img src={require("../../../core/images/9.jpeg")} alt="" />
                  <div className="overlay" data-journeysubcard></div>
                  <h2 data-journeysubcard>The Day when I said <br /> I LOVE YOU</h2>
                </div>
                <div className="group-content">
                  <p>At that day when we had breakfast together (nga ikaw gd nag hmbal mapa aga gd ta, para ma solo moko HAHAHA), I didnt know what I felt but IT WAS THE MOST AMAZING FEELING IN THE WORLD! Ara bla nga daw ga date ta pero nga daw nd kay wla man ta ya nag confess sa isa kag isa. The small things you did like holding my phone and wallet, giving me alcohol, it was like we are a couple HAHAHA bisan sang ara na ta tippys you were still taking care of me and we held hands secretly HAHAHAH pero wla na ko tuh labot kung makita nila. Maybe because of those, I felt an overwhelming feeling plus gin amplify pa na ka ILIMNUN NATUN hahaha so later that night I was just looking at you dancing, laughing, and enjoying and I think to myself "Wow, she's so amazing, beautiful and so free" and at the moment I didn't know I fell to you really really hard until I said "I Love You". And boom patay nako diritso na ko tulog HAHAHHA</p>
                </div>
              </li>
              <li>
                <div className="group" onMouseEnter={this.showJourneyCard} data-journeycard>
                  <img src={require("../../../core/images/5.jpeg")} alt="" />
                  <div className="overlay" data-journeysubcard></div>
                  <h2 data-journeysubcard>LDR First Strike!</h2>
                </div>
                <div className="group-content">
                  <p>Diri gd ko nga part galalain HAHAHAHA I remembered when you told me abou you and your fam is talking about who will go to manila to help your granny, and when you said nga ikaw makadto didto, jusko daw gulpi nag untat ang pag beat ka heart ko muh HAHAHAHA grabe nga overthink kag kulba ang akon tuh. My thoughts at that moment was "Hala manila, damo2 naman na nga lalaki nga mas gwapo kag ma appeal ang mapapansin cya", "Taga lagaw niya ni diba grabe gd ni pa gwapa niya, basi may ma agaw na ni cya", "Te kung hmbalon niya ko nga may nakita na tuh sya? Ano ireact ko" jusko galalain gd ko tuh ya. But when I started to talk about this to you, you never got mad, you never got annoyed, instead you consistently, sincerely and genuinely gave me updates, assurances, and love, and I really really appreciated that baby 🥺🥺🥺 Because of that I can still go on with my works and with other things without worrying or overthinking about losing you 🥺🥺🥺 So THANK YOUUU SOO MUCH GD BABY KOOO!!! PALANGGA PALANGGA TAGD KAAAA!!!! ❤️❤️❤️</p>
                </div>
              </li>
              <li>
                <div className="group" onMouseEnter={this.showJourneyCard} data-journeycard>
                  <img src={require("../../../core/images/12.jpeg")} alt="" />
                  <div className="overlay" data-journeysubcard></div>
                  <h2 data-journeysubcard>Our First DUO!</h2>
                </div>
                <div className="group-content">
                  <p>Gamayon ko lng ni kay basi kapoy kana basa sa tatlo na kagina HAHHAHAHA, I played games before with my exes, but I don't know why playing with you is much entertaining. I was actually afraid or nervous, because I thought that this would turned out the same as with my ex MU. Ma away gd kmi tudo tungod lng sa game, dapat gani ma bonding and daw ka stress reliever pero suli ang natabo. I don't know about you, but I truly enjoyed your accompany. I love how we talk, I love how we tease each other, I love how we play, I love we react when we are about to die hahaha. Bisan ga reklamo kana kay wala mo gd na gina dibdib kag ipa upok sakun, that's why now, I feel much more comfortable playing games with you 😊 kag kilig2 gd ko eh ara bla may mapatay simo pero to the rescue dayun si BF nga daw imo nga knight in shining armor 😎 HAHAHHAHA</p>
                </div>
              </li>
              <li>
                <div className="group" onMouseEnter={this.showJourneyCard} data-journeycard>
                <video width="400" height="300" controls data-journeysubcard>
                  <source src={require("../../../core/videos/1.mp4")} type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
                  <div className="overlay" data-journeysubcard></div>
                  <h2 data-journeysubcard>ZXCASDASSAD!!!</h2>
                </div>
                <div className="group-content">
                  <p>Kung ano dra ang title, KAY AMO GD NA REACTION KO SANG GIN SENDAN MO KO NA HAHAHA </p>
                </div>
              </li>
              <li>
                <div className="group" onMouseEnter={this.showJourneyCard} data-journeycard>
                <video width="400" height="300" controls data-journeysubcard>
                  <source src={require("../../../core/videos/2.mp4")} type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
                  <div className="overlay" data-journeysubcard></div>
                  <h2 data-journeysubcard>The Moment I know that You dont want to Lose ME</h2>
                </div>
                <div className="group-content">
                  <p>At that day when we had breakfast together (nga ikaw gd nag hmbal mapa aga gd ta, para ma solo moko HAHAHA), I didnt know what I felt but IT WAS THE MOST AMAZING FEELING IN THE WORLD! Ara bla nga daw ga date ta pero nga daw nd kay wla man ta ya nag confess sa isa kag isa. The small things you did like holding my phone and wallet, giving me alcohol, it was like we are a couple HAHAHA bisan sang ara na ta tippys you were still taking care of me and we held hands secretly HAHAHAH pero wla na ko tuh labot kung makita nila. Maybe because of those, I felt an overwhelming feeling plus gin amplify pa na ka ILIMNUN NATUN hahaha so later that night I was just looking at you dancing, laughing, and enjoying and I think to myself "Wow, she's so amazing, beautiful and so free" and at the moment I didn't know I fell to you really really hard until I said "I Love You". And boom patay nako diritso na ko tulog HAHAHHA</p>
                </div>
              </li>
              <li>
                <div className="group" onMouseEnter={this.showJourneyCard} data-journeycard>
                  <img src={require("../../../core/images/13.png")} alt="" />
                  <div className="overlay" data-journeysubcard></div>
                  <h2 data-journeysubcard>FINALLY! IT'S OFFICIAL!</h2>
                </div>
                <div className="group-content">
                  <p>At that day when we had breakfast together (nga ikaw gd nag hmbal mapa aga gd ta, para ma solo moko HAHAHA), I didnt know what I felt but IT WAS THE MOST AMAZING FEELING IN THE WORLD! Ara bla nga daw ga date ta pero nga daw nd kay wla man ta ya nag confess sa isa kag isa. The small things you did like holding my phone and wallet, giving me alcohol, it was like we are a couple HAHAHA bisan sang ara na ta tippys you were still taking care of me and we held hands secretly HAHAHAH pero wla na ko tuh labot kung makita nila. Maybe because of those, I felt an overwhelming feeling plus gin amplify pa na ka ILIMNUN NATUN hahaha so later that night I was just looking at you dancing, laughing, and enjoying and I think to myself "Wow, she's so amazing, beautiful and so free" and at the moment I didn't know I fell to you really really hard until I said "I Love You". And boom patay nako diritso na ko tulog HAHAHHA</p>
                </div>
              </li>
              <li>
                <div className="group" onMouseEnter={this.showJourneyCard} data-journeycard>
                <video width="400" height="300" controls data-journeysubcard>
                  <source src={require("../../../core/videos/3.mp4")} type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
                  <div className="overlay" data-journeysubcard></div>
                  <h2 data-journeysubcard>1ST MONTHSARY!!!</h2>
                </div>
                <div className="group-content">
                  <p>At that day when we had breakfast together (nga ikaw gd nag hmbal mapa aga gd ta, para ma solo moko HAHAHA), I didnt know what I felt but IT WAS THE MOST AMAZING FEELING IN THE WORLD! Ara bla nga daw ga date ta pero nga daw nd kay wla man ta ya nag confess sa isa kag isa. The small things you did like holding my phone and wallet, giving me alcohol, it was like we are a couple HAHAHA bisan sang ara na ta tippys you were still taking care of me and we held hands secretly HAHAHAH pero wla na ko tuh labot kung makita nila. Maybe because of those, I felt an overwhelming feeling plus gin amplify pa na ka ILIMNUN NATUN hahaha so later that night I was just looking at you dancing, laughing, and enjoying and I think to myself "Wow, she's so amazing, beautiful and so free" and at the moment I didn't know I fell to you really really hard until I said "I Love You". And boom patay nako diritso na ko tulog HAHAHHA</p>
                </div>
              </li>
              <li>
                <div className="group" onMouseEnter={this.showJourneyCard} data-journeycard>
                  <div className="overlay" data-journeysubcard></div>
                  <h2 data-journeysubcard>MORE TO COME SOON!</h2>
                </div>
                <div className="group-content">
                  <p>Wala na ko oras bi langga sa sunod ko lng ni pang butangan pa gd</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="background sec3-bg">
            <img src={require("../../../core/images/birthday22/plain-bg.jpg")} alt="" />
          </div>
          <div className="content section3-content">
            <h1 className='title'>❤️ Memories ❤️ </h1>
            <Carousel touch={true} variant='dark' slide={false} fade={true} pause={false} interval={2000}>
              <Carousel.Item>
                <div className="card r-n20 ml-20">
                  <div className="card-body">
                    <img src={require("../../../core/images/1.jpeg")} alt="" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card horizontal ml-50 r-20 mt-20">
                  <div className="card-body">
                    <img src={require("../../../core/images/11.jpeg")} alt="" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card m-auto">
                  <div className="card-body">
                    <img src={require("../../../core/images/14.png")} alt="" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card horizontal ml-20 mt-20 r-n20">
                  <div className="card-body">
                    <img src={require("../../../core/images/15.jpeg")} alt="" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card r-20 ml-20">
                  <div className="card-body">
                    <img src={require("../../../core/images/16.jpeg")} alt="" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card r-n20 ml-50">
                  <div className="card-body">
                    <img src={require("../../../core/images/17.jpeg")} alt="" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card m-auto r-20">
                  <div className="card-body">
                    <img src={require("../../../core/images/18.jpeg")} alt="" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card r-n20 ml-20">
                  <div className="card-body">
                    <img src={require("../../../core/images/19.jpeg")} alt="" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card m-auto">
                  <div className="card-body">
                    <img src={require("../../../core/images/20.jpeg")} alt="" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card r-20 ml-50">
                  <div className="card-body">
                    <img src={require("../../../core/images/21.jpeg")} alt="" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card r-n20 ml-20">
                  <div className="card-body">
                    <img src={require("../../../core/images/22.jpeg")} alt="" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card r-20 m-auto">
                  <div className="card-body">
                    <img src={require("../../../core/images/23.jpeg")} alt="" />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Birthday22IndexView;