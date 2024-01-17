import React from 'react';
import ContributorProps from './Conduit'
import './Contributor.css'

function Contributor(props: {title: string, name: string, bio?: string, pictureURL?: string, pronouns?: string, imgSrc?: any}) {
  return (
    <div className="contributorContent">
      {props.imgSrc != undefined && <img className='portrait' src={props.imgSrc} />}
      <div className="contributorHeader">
        <div className='contributorName'>{props.name}</div> 
        <div className='contributorDetails'>{props.title}</div>
        <div className='contributorDetails'>{props.pronouns}</div>
      </div>
      <div className="contributorBio">
        {props.bio}
      </div>
    </div>
  );
}

export default Contributor;












