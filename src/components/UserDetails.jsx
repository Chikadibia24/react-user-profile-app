import React from "react";
import DisplayUsers from "./DisplayUsers";
import "../App.css";

const UserDetails = ({userData}) => {

  // const { name, bio, dob } = user;

  
  return (
    userData.map((user) => {
      // let itemIndex = index + 1;
      return (
        <DisplayUsers
          userDataDisplay={user}
          // index={index}
          key={user.id}
        />
      );
    })
  )
}
export default UserDetails;




{/* <div className="p-[]">
        <p>{userData[0].name}</p>
        <p>{userData[0].bio}</p>
        <p>{userData[0].dateOfBirth}</p>
      </div> */}




      {
        /* userData.map((user) => {
        return <DisplayUsers userDataDisplay={user} key={ user.name} />; 
        } */
}
      


// userData.map((user, key, index) => {
    //     return(
    //       <div className="p-[]">
    //         <p>{user[0].name}</p>
    //         <p>{user[0].bio}</p>
    //         <p>{user[0].dateOfBirth}</p>
    //       </div>
    //     );

//   })
    


{/* <>
    //   <div className="p-[]">
    //     <p>{userData[0].name}</p>
    //     <p>{userData[0].bio}</p>
    //     <p>{userData[0].dateOfBirth}</p>
    //   </div>

    //   <div className="p-[]">
    //     <p>{userData[1].name}</p>
    //     <p>{userData[1].bio}</p>
    //     <p>{userData[1].dateOfBirth}</p>
    //   </div>

    //   <div className="p-[]">
    //     <p>{userData[2].name}</p>
    //     <p>{userData[2].bio}</p>
    //     <p>{userData[2].dateOfBirth}</p>
    //   </div>

    //   <div className="p-[]">
    //     <p>{userData[3].name}</p>
    //     <p>{userData[3].bio}</p>
    //     <p>{userData[3].dateOfBirth}</p>
    //   </div>
    // </> */}