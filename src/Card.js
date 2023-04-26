import React, { useState } from 'react'
import './Card.css'
import cake from './cake.png'
import wish from './wish.png'
import useSound from 'use-sound'
import confetti from 'canvas-confetti';
import audi from './audi.mp3'
export default function Card({ name }) {
   const[aud] =useSound(audi)
    let date = new Date().toLocaleDateString();
    const [load, setlaod] = useState(true);
    function lo() {
      setlaod(false)
      aud()
      Fire()
         
    }
    setTimeout(lo, 3000)
 
  const fire = (ratio,opt) =>{
        confetti(Object.assign({},opt,{
          origin:{y:0.5},
          particleCount:Math.floor(200*ratio)
        }));
      }
    
      const Fire = () =>{
            fire(.25,{
              spread:30,
              startVelocity:60
    
            });
            fire(.2,{spread:60});
            fire(.35,{spread:100,
            decay:.9,
          scalar:1});
          fire(.1,{
            spread:130,
            startVelocity:30,
            decay:.92,
            scalar:1.2
          });
          fire(.2,{
            spread:120,
            startVelocity:45
          })
      }
  return (
      <div className='Card'>
          {
              load ? (<div className='load'>
                  <span className='spa'>Loading..</span>
                  <div class="balloon"></div>
<div class="balloon"></div>
<div class="balloon"></div>
<div class="balloon"></div>
<div class="balloon"></div>
</div>) : (<>
                      <div className='left'>
                          <div className='load1'>
<div class="balloon"></div>
<div class="balloon"></div>
</div>
              <div className='lcon'>
                  <img className='img' src={wish} />
                              <h4>To you</h4>
                              <h2>{ name }</h2>
                  <p>Today is all about you, my dear friend. May this birthday be filled with joy, laughter, and unforgettable memories. Thank you for being such an important part of my life. Happy birthday!</p>
                              <h5 className='from'>--Ram Mathala</h5>
                              <h6>{ date}</h6>
                          </div>
          </div>
          <div className='right'>
            <img className='rign' src={cake} alt='' />

          </div></>
              )
          }
          
    </div>
  )
}
