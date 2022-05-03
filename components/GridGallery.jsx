import Image from "next/image";
import one from "../public/one.jpg";
import two from "../public/two.jpg";
import three from "../public/three.jpg";
import four from "../public/four.jpg";
import five from "../public/five.jpg";
import six from "../public/six.jpg";
import seven from "../public/seven.jpg";
import eight from "../public/eight.jpg";
import nine from "../public/nine.jpg";
import ten from "../public/ten.jpg";
import eleven from "../public/eleven.jpg";
import twelve from "../public/twelve.jpg";
import fourteen from "../public/fourteen.jpg";
import fifteen from "../public/fifteen.jpg";
import sixteen from "../public/sixteen.jpg";
import seventeen from "../public/seventeen.jpg";
import eighteen from "../public/eighteen.jpg";
import iraq from "../public/iraq.jpg";
import twentytwo from "../public/twentytwo.jpg";
import twentythree from "../public/twentythree.jpg";
import twentyfour from "../public/twentyfour.jpg";
import twentyfive from "../public/twentyfive.jpg";
import twentysix from "../public/twentysix.jpg";
import twentyseven from "../public/twentyseven.jpg";
import twentyeight from "../public/twentyeight.jpg";
import twentynine from "../public/twentynine.jpg";
// TODO: Update images
export default function GridGallery() {
  return (
    <>
      <div className="gallery-wrapper">
        <div className="gallery">
          <div className="image-wrap image-2">
            <Image
              className="image"
              layout="fill"
              objectFit="cover"
              alt=""
              src={twentytwo}
            />
          </div>

          <div className="image-wrap image-3">
            <Image
              layout="fill"
              objectFit="cover"
              className="image"
              alt=""
              src={twentythree}
            />
          </div>
          {/* TODO: Make images reponsive */}
          <div className="image-wrap image-4">
            <Image
              className="image"
              layout="fill"
              objectFit="cover"
              alt=""
              src={twentysix}
            />
          </div>
          <div className="image-wrap image-14">
            <Image
              className="image"
              layout="fill"
              objectFit="cover"
              alt=""
              src={fourteen}
            />
          </div>
          <div className="image-wrap image-5">
            <Image
              className="image"
              layout="fill"
              objectFit="cover"
              alt=""
              src={twentyfive}
            />
          </div>
          <div className="image-wrap image-6">
            <Image
              className="image"
              layout="fill"
              objectFit="cover"
              alt=""
              src={twentyfour}
            />
          </div>

          <div className="image-wrap image-7">
            <Image
              className="image"
              objectFit="cover"
              layout="fill"
              alt=""
              src={twentyseven}
            />
          </div>

          <div className="image-wrap image-8">
            <Image className="image" alt="" src={twentyeight} />
          </div>


          <div className="image-wrap image-10">
            <Image
              className="image"
              layout="fill"
              objectFit="cover"
              alt=""
              src={twentynine}
            />
          </div>

          <div className="image-wrap image-iraq">
            <Image
              className="image"
              layout="fill"
              objectFit="cover"
              alt=""
              src={iraq}
            />
          </div>



          <div className="image-wrap image-17">
            <Image
              layout="fill"
              objectFit="cover"
              className="image"
              alt=""
              src={seventeen}
            />
          </div>
          <div className="image-wrap image-16">
            <Image className="image" alt="" src={sixteen} />
          </div>

        </div>
      </div>

      <style jsx>{`
        .gallery-wrapper {
          /* max-width: 1200px;
          margin: auto; */
          background-color: #e8f8e3;
          /* max-width: 1200px; */
          margin: auto;
          padding: 2rem 0;
        }
        .gallery {
          background-color: #e8f8e3;
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          /* grid-template-columns: repeat(4, 1fr); */
          /* grid-template-rows: masonry;
           */
          grid-auto-rows: 15vh;
          grid-gap: 1rem;
          grid-auto-flow: dense;
          /* align-items: stretch; */
          padding: 2rem;
        }
        .image-wrap {
          position: relative;
          /* objectFit: none; */

          /* border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center; */
        }

        /* .gallery__item:nth-child(2n) {
          grid-area: 1/1 / span 2 / span 2;
        } */
        .image-2 {
          grid-column: auto / span 2;
          grid-row: auto / span 2;
        }

        .image-4, .to_school {
          grid-row: auto / span 2;
        }
        .image-8 {
          grid-row: auto / span 2;
        }
        .image-10 {
          grid-column: auto / span 2;
          grid-row: auto / span 2;
        }
        .image-17,
        .image-14, .image-iraq {
          grid-column: auto / span 2;
          grid-row: auto / span 2;
        }
      `}</style>
    </>
  );
}
