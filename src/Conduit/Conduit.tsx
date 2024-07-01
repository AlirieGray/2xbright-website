import React from 'react';
import Contributor from './Contributor';
import battle from '../images/battle.png';
import camp from '../images/camp.png';
import village from '../images/village_screenie.png';
import mountaintop from '../images/mountain_screenie.png';
import seijiPortrait from '../images/seiji_portrait.jpg';
import alPortrait from '../images/al_portrait.jpg';
import yeni from '../images/yeni.png';
import './Conduit.css';

const contributors = [
  {
    name: 'Alirie Gray',
    pronouns: 'she/he',
    title: 'Creative Director, Writer, Programmer',
    imgSrc: alPortrait,
    bio: `Alirie Gray is a writer and software engineer from Los Angeles. 
    As an avid fantasy reader and RPG player, she is drawn to the power of fantasy and science fiction as a shared place to grapple with complex topics and expand our vision of what's possible for a better future. 
    Conduit of the Miracle is her first video game and creative baby, and she looks forward to developing and releasing Part Two which will expand on the characters and world introduced in Part One.`
  },
  {
    name: 'Seiji Igei',
    pronouns: 'they/he',
    title: 'Character Designer',
    imgSrc: seijiPortrait,
    bio: `Seiji Igei is a 2D digital artist and motion editor in Chicago (Land of the Council of the Three Fires: The Odawa, Ojibwe and Potawatomi Nations).  
    In 2018, they graduated from DePaul University in Chicago with a BFA in Animation.  They enjoy creating fun, nostalgic art that remixes American and 
    Asian pop culture!  He focuses on creating engaging and educational work that informs and inspires others.  Seiji has volunteered with student/local 
    organizing and graphic design commissions for nonprofits in Chicago and Los Angeles since 2015.  With this experience, they hope to create and support 
    stories that envision a more just and caring world.`
  },
  {
    name: 'Emilia Nisula',
    title: 'Background Artist',
    pronouns: 'she/her',
    bio: 'Emilia painted all of the backgrounds for Conduit of the Miracle: Part One. You can find her on Instagram at @mmepu'
  },
  {
    name: 'wscsthespirit and Flux Psyche',
    title: 'Composer, Mountaintop Theme'
  },
] 

function Conduit() {
  return (
    <div className='conduitWrapper'>
        <div className='conduitHeader'>
          <div className='sectionHeader' id="conduit">Conduit of the Miracle</div>
          <p className="subtitle">Part One - Prologue</p>
          <p className="subtitle">Coming Soon 2024</p>
        </div>
        <div className='section'>
          <div className='summary'>
            <p>Yeni is a young widow, left to care for her infant daughter alone, when she's suddenly tasked with protecting and transporting a mysterious relic. To carry out her late husband's final wishes, Yeni must return to the village of her birth and reunite with her estranged mother, who may know more about the strange artifact than she lets on.</p>

            <p>Will you unlock the secrets of the past? How will your actions shape the course of the future?</p>
            
            <p>A visual novel that sets the stage for an epic adventure to come...</p>
          </div>
        </div>

        <div className='section'>
          <div className="imgContainer">
            <img className='screenie' src={village} width={810} height={455}/>
            <img className='screenie' src={mountaintop} width={810} height={455}/>
            <img className='screenie' src={battle} width={810} height={455}/>
            <img className='screenie' src={camp} width={810} height={455}/>
            {/* <img src={yeni} width={642} height={885} /> */}
          </div>
        </div>

        <div className='section'>
          <div className='sectionHeader' id="contributors">Contributors</div>
          {contributors.map((contributor) => {
            return (
              <Contributor name={contributor.name} title={contributor.title} bio={contributor.bio} imgSrc={contributor.imgSrc} pronouns={contributor.pronouns}/>
            )
          })}
        </div>
    </div>
  );
}

export default Conduit;
