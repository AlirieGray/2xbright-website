import React from 'react';
import ContributorProps from './Conduit'
import './Contributor.css'
import './Conduit.css'

function Contributor(props: {title: string, name: string, bio?: string, pictureURL?: string}) {
  return (
    <div className="sectionContent">
      <div className="contributorHeader">
        <div className='contributorName'>{props.name}</div> 
        <div className='contributorTitle'>{props.title}</div>
      </div>
      <div className="contributorBio">
        {props.bio}
      </div>
    </div>
  );
}

export default Contributor;












