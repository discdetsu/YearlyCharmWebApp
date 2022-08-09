import React from 'react'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
const images = importAll(require.context('../images/mansonry', false, /\.(png|jpe?g|JPG|svg)$/));

const Mansonry = () => {

    return (
        <div className="sec" id="sec">
      <h2>HAPPY 8.7 ANNIVERSARY!</h2>
      
      <div className="c-multicol">
        <div className="post">
          <img src={images['LetTakePic.JPG']} alt="Let's take a pic" />
          <h1>Let's take some pic</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic.</p>
        </div>
        <div className="post">
          <img src={images['BoxBox.jpeg']} alt="Box Box Dog Cafe" />
          <h1>Meet Choyu & Friends</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias officia unde distinctio labore similique praesentium ipsam odio?</p>
        </div>
        <div className="post">
          <img src={images['TeaTime.jpeg']} alt="Tea Time" />
          <h1>Afternoon Tea</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias officia unde distinctio labore similique praesentium ipsam odio?</p>
        </div>
        <div className="post">
          <img src={images['Museum.jpeg']} alt="Chiang Mai City Museum" />
          <h1>Chiang Mai City Museum</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias.</p>
        </div>
        <div className="post">
          <img src={images['KasetFair.jpeg']} alt="Kaset Fair Trip" />
          <h1>KasetFair</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias officia unde distinctio labore similique praesentium ipsam odio?</p>
        </div>
        <div className="post">
          <img src={images['OurFirstTrip.JPG']} alt="Our First Trip" />
          <h1>Our first trip</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias officia unde distinctio labore similique praesentium ipsam odio?</p>
        </div>
        <div className="post">
          <img src={images['BackToKP.JPG']} alt="Back to KP" />
          <h1>Back to KP</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias officia unde distinctio labore similique praesentium ipsam odio?</p>
        </div>
        <div className="post">
          <img src={images['SpecialNightDinner.jpeg']} alt="Special Night Dinner" />
          <h1>Memorable Date & Dinner</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias officia unde distinctio labore similique praesentium ipsam odio?</p>
        </div>
        <div className="post">
          <img src={images['LateNightMooping.jpeg']} alt="Late Night Mooping" />
          <h1>Late night Mooping</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias officia unde distinctio labore similique praesentium ipsam odio?</p>
        </div>
        <div className="post">
          <img src={images['TheExplanationOfLove.JPG']} alt="The Explanation Of Love" />
          <h1>The Explanation of Love</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias officia unde distinctio labore similique praesentium ipsam odio?</p>
        </div>
        <div className="post">
          <img src={images['Miss.jpg']} alt="Miss" />
          <h1>Miss</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias officia unde distinctio labore similique praesentium ipsam odio?</p>
        </div>
        <div className="post">
          <img src={images['BigAnniversary.jpg']} alt="Big ANNIVERSARY" />
          <h1>Big ANNIVERSARY!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias officia unde distinctio labore similique praesentium ipsam odio?</p>
        </div>
        <div className="post">
          <img src={images['We go blue.jpeg']} alt="We go blue" />
          <h1>We go blue</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias officia unde distinctio labore similique praesentium ipsam odio?</p>
        </div>
        <div className="post">
          <img src={images['SeaExplore.jpeg']} alt="SeaExplore" />
          <h1>🌊🐬🐳🐟🐠🦈🐙🦀🐢🐡</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias officia unde distinctio labore similique praesentium ipsam odio?</p>
        </div>
        <div className="post">
          <img src={images['HidesanCafe.jpeg']} alt="Hidesan cafe" />
          <h1>Visit Hidesan's Cafe</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias officia unde distinctio labore similique praesentium ipsam odio?</p>
        </div>
        <div className="post">
          <img src={images['JapanAtKP.jpg']} alt="JapanAtKP" />
          <h1>Japan @KP</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias officia unde distinctio labore similique praesentium ipsam odio?</p>
        </div>
        <div className="post">
          <img src={images['MyLittleMermaid.jpg']} alt="MyLittleMermaid" />
          <h1>My little Mermaid</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias officia unde distinctio labore similique praesentium ipsam odio?</p>
        </div>
        <div className="post">
          <img src={images['Art Art.jpg']} alt="Art Art" />
          <h1>Art Art</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias officia unde distinctio labore similique praesentium ipsam odio?</p>
        </div>        
        <div className="post">
          <img src={images['Fly.jpeg']} alt="Fly" />
          <h1>DMK to CNX = Paksoi</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias officia unde distinctio labore similique praesentium ipsam odio?</p>
        </div>
        <div className="post">
          <img src={images['SnowfallInSeoul.jpg']} alt="SnowfallInSeoul" />
          <h1>Snowfall In Seoul (X'Mas Eve)</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores assumenda incidunt hic porro quia veniam ut dicta iste eius, dolores molestias officia unde distinctio labore similique praesentium ipsam odio?</p>
        </div>
      </div>

      <h2 style={{paddingTop: "100px"}}>And our story continues...</h2>
    </div>
    )
}

export default Mansonry;