import PTCHeader from '../components/PTCHeader'
import GridGallery from '../components/GridGallery';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1>Be Sure to get out to the primary. </h1>
      <div className="logo-wrapper">
        <Image
          src={"/patTillmanLogo.jpg"}
          alt="Pat Tillman Campaign Logo"
          width={500}
          height={378}
          layout="intrinsic"
          className="logo"
        />
      </div>

      {/*  should be one of fill,fixed,intrinsic,responsive,raw,undefined. */}
      <p>Pat Tillman for County Commissioner!</p>

      <style jsx>{`
        * {
          margin: 10rem auto;
          text-align: center;
          max-width: 900px;
          width: 80%;
        }
        h1 {
          font-size: 5em;
        }
        p {
          font-size: 2em;
        }
        .logo-wrapper{
          display: flex;
          max-width: 500px;
        }

        .logo {
          text-align: center;
          margin: auto;
        }
      `}</style>
    </>
  );


}
