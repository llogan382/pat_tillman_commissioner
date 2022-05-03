import PTCHeader from "../components/PTCHeader";
import GridGallery from "../components/GridGallery";
import Image from "next/image";
import profile from "../public/profile.jpg";
import PTCVideo from "../components/PTCVideo";
import three from "../public/three.jpg";
import Endorsements from "../components/Endorsements";
import React from "react";
export default function Home() {
  return (
    <>
      <PTCVideo />
      <section className="header_wrapper">
        <p className="headerContent">
        Welcome to my site and I am delighted you are taking time to inform yourself. I wanted this site to be a portal for those that are exploring, and to keep this site more conversational. So, here goes!
        </p>
      </section>

      <section className="meet_pat_section">
        <div className="meet_pat_wrapper">
          <div className="meet_pat_content">
            <h2>Meet Pat</h2>
            <p>
            A ‘heart for service’ is what you need to know about me, and this experience matters. This started when I joined the US Marines 5 weeks after I graduated from Appalachian State University. Serving my country is one of the greatest privileges I’ve ever known, both in peacetime and in armed conflict.
            </p>
          </div>

          <div className="meet_pat_img">
            <Image
              // layout="fill"
              width={400}
              height={400}
              // className="navLogo"
              src={profile}
              alt="Pat Tillman Logo"
            />
          </div>
        </div>
      </section>
      <Endorsements />
      <GridGallery />
      <style jsx>{`
      .headerContent{
        font-weight: bold;
          max-width: 1200px;
  width: 80%;
  margin: 0 auto;

      }
              .meet_pat_section {
          width: 100%;
          color: white;
          background-color: var(--neutral-green);
        }
        .header_wrapper {
          display: flex;
          margin: auto;
        }



        .meet_pat_wrapper {
          max-width: 1200px;
          /* width: 80%; */

          margin: auto;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-evenly;
          gap: 2rem;
        }
        h3 {
          font-weight: bold;
          margin: auto;
        }
        .meet_pat_content {
          /* padding: 2rem 0; */
          display: flex;
          flex-direction: column;
          flex: 50%;

        }
        .meet_pat_img {
          /* flex: 100% 80% auto; */
          flex: auto;

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

        @media (max-width: 600px) {
          .meet_pat_wrapper {
            /* max-width: 1200px;
            margin: auto;
            display: flex; */
            flex-direction: column;
            justify-content: space-evenly;
            flex-direction: column-reverse;
          }
          .header_wrapper {
            padding-top: 0px;
            margin-top: -75px;
        }
        }
      `}</style>
    </>
  );
}
