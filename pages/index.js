import PTCHeader from "../components/PTCHeader";
import GridGallery from "../components/GridGallery";
import Image from "next/image";
import PTCVideo from "../components/PTCVideo";
import three from "../public/three.jpg";
import React from "react";
export default function Home() {
  return (
    <>
      <PTCHeader />
      <PTCVideo />
      <section className="header_wrapper">
        <p className="headerContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo.
        </p>
      </section>

      <section className="meet_pat_section">
        <div className="meet_pat_wrapper">
          <div className="meet_pat_content">
            <h3>Meet Pat</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehend
            </p>
          </div>
          <div className="meet_pat_img">
            <Image
              // layout="fill"
              width={1500}
              height={1200}
              className="navLogo"
              src={three}
              alt="Pat Tillman Logo"
            />
          </div>
        </div>
      </section>
      <GridGallery />
      <style jsx>{`
        .header_wrapper {
          display: flex;
          max-width: 1200px;
          margin: auto;
        }

        .meet_pat_section {
          width: 100%;
          color: white;
          background-color: var(--dark-red);
        }

        .meet_pat_wrapper {
          max-width: 1200px;
          margin: auto;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        }
        .meet_pat_content {
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
        }
        .meet_pat_img {
        }

        .player-wrapper {
          position: relative;
          border: 5px solid red;
          padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
        }

        .react-player {
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </>
  );
}
