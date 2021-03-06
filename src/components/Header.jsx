import React from 'react';

function Header(){
  return (
    <div className="rainbow_border">
      <style jsx>{`
          div {
            background-color:tomato;
            color:white;
            text-align: center;
            margin-right: 19.4%;
            height: 12vh;
            margin-left: 16.4%;
            margin-top: 5%;
            font-family: chalkduster;
            font-size: 2.25vw;
            padding: 2%;
          }
          @keyframes rainbow {
            12.5% {
              border: 10px dotted #FF0000;
            }
            25% {
              border: 10px dotted #FFA500;
            }
            37.5% {
              border: 10px dotted #FFFF00;
            }
            50% {
              border: 10px dotted #7FFF00;
            }
            62.5% {
              border: 10px dotted #00FFFF;
            }
            75% {
              border: 10px dotted #0000FF;
            }
            87.5% {
              border: 10px dotted #9932CC;
            }
            100% {
              border: 10px dotted #FF1493;
            }
          }
          .rainbow_border{
            border: 10px dotted hsl(0, 100%, 50%);
            animation: rainbow 5s infinite alternate;
          }
          `}
        </style>
        <h1>Homie Simulator</h1>
      </div>
    );
  }

  export default Header;
