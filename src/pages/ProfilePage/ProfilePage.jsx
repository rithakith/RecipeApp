import React from "react";
import "./ProfilePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useAuthContext } from "../../Hooks/useAuthContext";

import profile1 from "../../assets/profile_images/profilepic1.jpg";

const ProfilePage = () => {
  const { user } = useAuthContext();
  console.log(user);

  return (
    <>
      <Navbar />

      <div id="profile">
        <div id="profile-container">
          <div id="profile-pic-area">
            <div id="profile-pic-bg">
              {/* <div id="profile-topic">Profile</div> */}
            </div>

            <div id="profile-pic">
              <img src={profile1} alt="" />
            </div>

            <div id="profile-user">Hi, There!</div>
          </div>

          <div id="profile-details">
            <div>
              <p className="profile-details-tag">Username :</p>
              <p>{user.displayName}</p>
            </div>

            <div>
              <p className="profile-details-tag">Email :</p>
              <p>{user.email}</p>
            </div>
          </div>

          <div id="profile-recipes">
            <p>Recipes created</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProfilePage;
