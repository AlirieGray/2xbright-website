import React from 'react';
import Contributor from './Contributor';

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
          Conduit of the Miracle: Part One - Prologue
          Coming Soon 2024
        </div>
        <div className='section'>
          <div className='summary'>
            A visual novel that follows the journey of a young widowed mother as she tries to find answers about the past.
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
