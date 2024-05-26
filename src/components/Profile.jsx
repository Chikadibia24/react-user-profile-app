import {React, useState, useEffect} from "react";
import UserDetails from "./UserDetails";
import "../App.css";


const Profile = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    // const usersArr = [
    //   { name: "Segun", bio: "Young and Tall", dateOfBirth: 1990 },
    //   { name: "Arinze", bio: "Old and Smart", dateOfBirth: 1980 },
    //   { name: "Cosmas", bio: "Brilliant and Happy", dateOfBirth: 1990 },
    //   { name: "Femi", bio: "Handsome and Funny", dateOfBirth: 2000 },
    // ];

  useEffect(() => {
      

    const usersArr = [
      {
        id: 1,
        name: "Segun",
        bio: "Young and Tall",
        dateOfBirth: 1990,
        image:
          "https://res.cloudinary.com/chikadibia/image/upload/v1716752825/my-pic_unfobf.jpg",
      },
      {
        id: 2,
        name: "Arinze",
        bio: "Old and Smart",
        dateOfBirth: 1980,
        image:
          "https://res.cloudinary.com/chikadibia/image/upload/v1716752825/my-pic_unfobf.jpg",
      },
      {
        id: 3,
        name: "Cosmas",
        bio: "Brilliant and Happy",
        dateOfBirth: 1990,
        image:
          "https://res.cloudinary.com/chikadibia/image/upload/v1716752825/my-pic_unfobf.jpg",
      },
      {
        id: 4,
        name: "Femi",
        bio: "Handsome and Funny",
        dateOfBirth: 2000,
        image:
          "https://res.cloudinary.com/chikadibia/image/upload/v1716752825/my-pic_unfobf.jpg",
      },
    ];


      setTimeout(() => {
        setUsers(usersArr);
        setLoading(false);
        // console.log(usersArr);
        // <div>{usersArr}</div>
      }, 3000);
    }, []);
  
  // data.map((user) => {
  //   return <UserDetails user={user} />;
  // });

    return (
      <div className="userDetails-container">
        {loading ? (
          <div className="userDetails-sub-container">loading...</div>
        ) : (
          <div className="userDetails-sub-container">
            <UserDetails userData={users} />
          </div>
        )}
      </div>
    );

  
}
export default Profile;