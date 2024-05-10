import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import { CaretRight, X } from "@phosphor-icons/react";
import Modal from "../../components/Modal/Modal";
import useFetch from "../../Hooks/useFetch";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { projectFirestore } from "../../firebase/config";

const Home = () => {
  // Today's special
  const [favourites, setFavourites] = useState([]);
  const [isFavouritesPending, setIsFavouritesPending] = useState(false);
  const [favouritesError, setFavouritesError] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const { user } = useAuthContext();

  useEffect(() => {
    setIsFavouritesPending(true);
    projectFirestore
      .collection("favourites")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setFavouritesError("No recipes to load");
        } else {
          const results = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setFavourites(results);
        }
        setIsFavouritesPending(false);
      })
      .catch((err) => {
        setFavouritesError(err.message);
        setIsFavouritesPending(false);
      });
  }, []);

  const [recommended, setRecommended] = useState([]);
  const [isRecommendedPending, setIsRecommendedPending] = useState(false);
  const [recommendedError, setRecommendedError] = useState(null);

  useEffect(() => {
    setIsRecommendedPending(true);
    projectFirestore
      .collection("recommended")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setRecommendedError("No recipes to load");
        } else {
          const results = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setRecommended(results);
        }
        setIsRecommendedPending(false);
      })
      .catch((err) => {
        setFavouritesError(err.message);
        setIsFavouritesPending(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div id="home">
        <div id="home-container">
          <Carousel />

          <div id="tag-buttons">
            <div id="tag-button-1">
              <a href="/recipes">
                <p className="hover-underline-animation">Recipes & Menus</p>
              </a>
              <CaretRight size={28} />
            </div>

            <div id="tag-button-2">
              <a href="/newrecipe">
                <p className="hover-underline-animation">Create Recipe</p>
              </a>
              <CaretRight size={28} />
            </div>

            <div id="tag-button-3">
              <a href="/Premium">
                <p className="hover-underline-animation">Custom Meal Plan</p>
              </a>
              <CaretRight size={28} />
            </div>

            <div id="tag-button-4">
              <a href="/premium">
                <p className="hover-underline-animation">Create Grocery List</p>
              </a>
              <CaretRight size={28} />
            </div>

            <div id="tag-button-5">
              <a href="/premium">
                <p className="hover-underline-animation">Cooking Tips</p>
              </a>
              <CaretRight size={28} />
            </div>
          </div>

          <div id="home-container-top">
            <p className="section-topic">Today's Special</p>

            {isFavouritesPending && (
              <div className="threeDots">
                <ThreeDots
                  visible={true}
                  height="180"
                  width="180"
                  color="#4fa94d"
                  radius="20"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            )}
            {favouritesError && <div>{error}</div>}
            <div id="collection-container">
              {favourites &&
                favourites.map((recipe, index) => {
                  return (
                    <>
                      <RecipeCard key={index} recipe={recipe} />
                    </>
                  );
                })}
            </div>
          </div>

          <div id="home-container-middle">
            <p className="section-topic">Recommended Recipes</p>

            {isRecommendedPending && (
              <div className="threeDots">
                <ThreeDots
                  visible={true}
                  height="180"
                  width="180"
                  color="#4fa94d"
                  radius="20"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            )}
            {recommendedError && <div>{error}</div>}
            <div id="collection-container">
              {recommended &&
                recommended.map((recipe, index) => {
                  return <RecipeCard key={index} recipe={recipe} />;
                })}
            </div>
          </div>
        </div>
      </div>

      {!user && showModal && (
        <Modal>
          <div id="welcome-model">
            <div id="close-button" onClick={() => setShowModal(false)}>
              <X size={32} color="#509e2f" weight="bold" />
            </div>
            <div id="welcome-model-container">
              <h2>Do you want to login?</h2>
              <h6>
                You can also browse through our website without logging in.
              </h6>

              <div id="welcome-model-buttons">
                <Link to={"/login"} className="modal-link">
                  <button id="hover-underline-animation-2">login</button>
                </Link>
                <Link to={"/signup"} className="modal-link">
                  <button id="hover-underline-animation-2"> signup</button>
                </Link>
              </div>
            </div>
          </div>
        </Modal>
      )}

      <Footer />
    </>
  );
};

export default Home;
