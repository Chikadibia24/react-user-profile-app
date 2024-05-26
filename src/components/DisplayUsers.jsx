import React from 'react'
import "../App.css";

const DisplayUsers = ({userDataDisplay, key}) => {
   const { name, bio, dateOfBirth, image } = userDataDisplay;
  
    return (
      <div className="cards">
        <div className='profile-img-container'>
          <img src={image} className='profile-img' alt='profile-img'/>
        </div>

        <div className='profile-details-container'>
          <h1>{name}</h1>
          <p>{bio}</p>
          <p>{dateOfBirth}</p>
        </div>
      </div>
    );
  
  
  // return (
  //   <div className="p-[]">
  //     <p>{name }</p>
  //     <p>{bio}</p>
  //     <p>{dateOfBirth}</p>
  //   </div>
  // );
};

export default DisplayUsers;