import React from 'react';

function Team() {
    return ( 
        <div className='Container'>
            <div className='row p-3 mt-2 border-top'>
                <h1 className="text-center ">People </h1>
            </div>
            <div className='row p-5 text-muted fs-6 style={{ LineHeight: "1.8", fontSize:"1.2em" }}'>
                <div className='col-6 p-5 text-center'>
                     <img src="media\res_photo.png" style={{borderRadius:"80%", width:"40%"}}/>
                     <h4 className='mt-5'>Shabaz Fakhar</h4>
                     <h6>Founder Ceo</h6>
                </div>
                <div className='col-6 p-5'>
                      <p>
            Shabaz Fakhar founded Zerodha with a vision to simplify investing and make modern financial technology more accessible for the next generation. Driven by innovation, design, and problem-solving, he is building scalable digital products that combine technology with real-world impact.
          </p>
          <p>
            As a Computer Science engineer and full-stack developer, Shabaz focuses on creating seamless user experiences, secure backend systems, and intelligent fintech platforms inspired by the evolving global trading ecosystem.
          </p>
          <p>Basketball is his reset. Building is his obsession.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
                </div>
            </div>
        </div>
     );
}

export default Team;