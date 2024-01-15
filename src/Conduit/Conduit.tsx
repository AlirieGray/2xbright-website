import React from 'react';
import Contributor from './Contributor';
import battle from '../images/battle.png';
import camp from '../images/camp.png';
import village from '../images/village_screenie.png';
import mountaintop from '../images/mountain_screenie.png';
import yeni from '../images/yeni.png';

const contributors = [
  {
    name: 'Alirie Gray',
    title: 'Creative Director, Writer, Programmer',
    bio: 'Alirie is a writer and software engineer from Los Angeles. Conduit of the Miracle is her first video game.'
  },
  {
    name: 'Emilia Nisula',
    title: 'Background Artist',
    bio: 'Emilia painted all of the backgrounds for Conduit of the Miracle: Part One. You can find her on Instagram at @mmepu'
  },
  {
    name: 'Seiji',
    title: 'Character Artist',
  },
  {
    name: 'wscsthespirit',
    title: 'Composer, Mountaintop Theme'
  }
] 

function Conduit() {
  return (
    <div className='conduitWrapper'>
        <div className='conduitHeader'>
          Conduit of the Miracle
          <p>Part One - Prologue</p>
          <p>Coming Soon 2024</p>
        </div>
        <div className='section'>
          <div className='summary'>
            <p>Yeni is a young widow, left to care for her infant daughter alone. </p>

            <p>Will you unlock the secrets of the past?</p>
            
            <p>A visual novel that sets the stage for an epic adventure to come...</p>
          </div>
        </div>

        <div className='section'>
          <div>
            <img src={village} width={810} height={455}/>
            <img src={mountaintop} width={810} height={455}/>
            <img src={battle} width={810} height={455}/>
            <img src={camp} width={810} height={455}/>
            {/* <img src={yeni} width={642} height={885} /> */}
          </div>
        </div>

        <div className='section'>
          <div className='sectionHeader'>Contributors</div>
          {contributors.map((contributor) => {
            return (
              <Contributor name={contributor.name} title={contributor.title} bio={contributor.bio}/>
            )
          })}
        </div>
    </div>
  );
}

export default Conduit;
