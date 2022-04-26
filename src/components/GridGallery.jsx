import Image from "next/image";
import one from "../../public/1.jpg";
import two from "../../public/2.jpg";
import three from "../../public/3.jpg";
import four from "../../public/4.jpg";
import five from "../../public/5.jpg";
import six from "../../public/6.jpg";
import seven from "../../public/7.jpg";
import eight from "../../public/8.jpg";
import nine from "../../public/9.jpg";
import ten from "../../public/10.jpg";
import eleven from "../../public/11.jpg";
import twelve from "../../public/12.jpg";
import thirteen from "../../public/13.jpg";
import fourteen from "../../public/14.jpg";
import fifteen from "../../public/15.jpg";
import sixteen from "../../public/16.jpg";
import seventeen from "../../public/17.jpg";
// import 18 from '../../public/18.jpg'
// import 19 from '../../public/19.jpg'
// import 20 from '../../public/20.jpg'
// import 21 from '../../public/21.jpg'
// import 22 from '../../public/22.jpg'

export default function GridGallery() {
  return (
    <>
    <h2>Where we are</h2>
      <div className="gallery">

          <div className="image-wrap image-1">
            <Image className="image" alt="" src={one} />
        </div>

          <div className="image-wrap image-2">
            <Image className="image" alt="" src={two} />
        </div>

          <div className="image-wrap image-3">
            <Image

                    layout="fill"
        objectFit="cover" className="image" alt="" src={three} />
        </div>

          <div className="image-wrap image-4">
            <Image className="image" alt="" src={four} />
        </div>

          <div className="image-wrap image-5">
            <Image className="image" alt="" src={five} />
        </div>

          <div className="image-wrap image-6">
            <Image className="image" alt="" src={six} />
        </div>

          <div className="image-wrap image-7">
            <Image className="image" alt="" src={seven} />
        </div>

          <div className="image-wrap image-8">
            <Image className="image" alt="" src={eight} />
        </div>

          <div className="image-wrap image-9">
            <Image className="image" alt="" src={nine} />
        </div>

          <div className="image-wrap image-10">
            <Image className="image"
             layout="fill"
        objectFit="cover"
            alt="" src={ten} />
        </div>

          <div className="image-wrap image-11">
            <Image className="image" alt="" src={eleven} />
        </div>

          <div className="image-wrap image-12">
            <Image className="image" alt="" src={twelve} />
        </div>

          <div className="image-wrap image-13">
            <Image className="image" alt="" src={thirteen} />
        </div>

          <div className="image-wrap image-14">
            <Image className="image" alt="" src={fourteen} />
        </div>

          <div className="image-wrap image-15">
            <Image className="image" alt="" src={fifteen} />
        </div>

          <div className="image-wrap image-16">
            <Image

            className="image" alt="" src={sixteen} />
        </div>

          <div className="image-wrap image-17">
            <Image             layout="fill"
        objectFit="cover" className="image" alt="" src={seventeen} />
        </div>
      </div>

      <style jsx>{`
        .gallery {
          background-color: #E8F8E3;
          display: grid;
grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  /* grid-template-columns: repeat(4, 1fr); */
          /* grid-template-rows: masonry;
           */
            grid-auto-rows: 20vh;
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
        .image-3 {
  grid-column: auto / span 2;
  grid-row: auto / span 2;

        }

                .image-4 {
  grid-row: auto / span 2;
        }
                .image-10 {
  grid-column: auto / span 2;
  grid-row: auto / span 2;
        }
                        .image-16, .image-17{
  grid-column: auto / span 2;
  grid-row: auto / span 2;
        }
      `}</style>
    </>
  );
}
