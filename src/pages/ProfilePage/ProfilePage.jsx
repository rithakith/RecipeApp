import React from "react";
import "./ProfilePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import profile1 from "../../assets/profile_images/profilepic1.jpg";

const ProfilePage = () => {
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
          </div>

          <div id="profile-details">
            <div>
              <p>Full Name</p>
              <p></p>
            </div>
            <div>
              <p>User Name</p>
              <p></p>
            </div>
            <div>
              <p>Email</p>
              <p></p>
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
