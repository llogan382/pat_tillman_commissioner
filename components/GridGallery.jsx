import Image from "next/image";
import one  from "../public/one.jpg"
import two  from "../public/two.jpg"
import three  from "../public/three.jpg"
import four  from "../public/four.jpg"
import five  from "../public/five.jpg"
import six  from "../public/six.jpg"
import seven  from "../public/seven.jpg"
import eight  from "../public/eight.jpg"
import nine  from "../public/nine.jpg"
import ten  from "../public/ten.jpg"
import eleven  from "../public/eleven.jpg"
import twelve  from "../public/twelve.jpg"
import thirteen  from "../public/thirteen.jpg"
import fourteen  from "../public/fourteen.jpg"
import fifteen  from "../public/fifteen.jpg"
import sixteen  from "../public/sixteen.jpg"
import seventeen  from "../public/seventeen.jpg"
import eighteen  from "../public/eighteen.jpg"
// import 18 from '../public/18.jpg'
// import 19 from '../public/19.jpg'
// import 20 from '../public/20.jpg'
// import 21 from '../public/21.jpg'
// import 22 from '../public/22.jpg'

export default function GridGallery() {
  return (
    <>
    <div className="gallery-wrapper">

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
    </div>

      <style jsx>{`

      .gallery-wrapper{
          /* max-width: 1200px;
          margin: auto; */
          background-color: #E8F8E3;
                    /* max-width: 1200px; */
          margin: auto;
          padding: 2rem 0;

      }
        .gallery {

          background-color: #E8F8E3;
                    max-width: 1200px;
          margin: auto;
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
