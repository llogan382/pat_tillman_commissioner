import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import patTillmanLogo from "../public/patTillmanLogo.jpg";

export default function PTCHeader() {
  return (
    <div>
      <Head>
        <title>Pat Tillman | County Commissioner</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap"
          rel="stylesheet"
        />

        <meta
          property="og:title"
          content="Pat Tillman | For County Commissioner"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://pat-tillman-commissioner-n12tlvve4-luke-loganwebdev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpatTillmanLogo.083990b4.jpg&w=640&q=75"
        />
        <meta
          property="og:url"
          content="https://www.tillmanforcountycommissioner.com/"
        />

        <meta
          name="twitter:card"
          content="Pat Tillman | For County Commissioner"
        />
        <meta name="twitter:site" content="@PatTillman19" />
        <meta name="twitter:creator" content="@PatTillman19" />
      </Head>
      <div className="header-grid">
        <div className="grid-logo">
          <Image
            className="navLogo"
            src={patTillmanLogo}
            width={250}
            height={189}
            alt="Pat Tillman Logo"
          />
        </div>
        {/* <div className="grid-pages"> */}

        <div className="item1">
          <Link href="/experience">Experience</Link>
        </div>
        <div className="item2">
          <Link href="/service">
            <a>Service</a>
          </Link>
        </div>
        <div className="item3">
          <Link href="/priorities">
            <a>Priorities</a>
          </Link>
        </div>
        <div className="item4">
          <Link href="/donate">
            <a>Donate</a>
          </Link>
        </div>
        {/* </div> */}
        <div className="grid-email">
          <Link
            href="mailto:
      pat@tillmanforcountycommissioner.com"
          >
            <a>Email Pat</a>
          </Link>
        </div>
        <div className="grid-social1">
          <Link href="https://www.tiktok.com/@patricktillman1?lang=en">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                className="navLogo"
                src="/tiktok.png"
                width={25}
                height={25}
                alt="Pat Tillman Logo"
              />
            </a>
          </Link>
        </div>
        <div className="grid-social2">
          <Link href="https://www.facebook.com/patrick.tillman.31">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                className="navLogo"
                src="/facebook.png"
                width={25}
                height={25}
                alt="Pat Tillman Logo"
              />
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .header-grid {
          display: grid;
          align-items: end;
          /* justify-content: end; */
          justify-items: end;
          grid-template-columns: 200px minmax(300px 1fr);
          grid-auto-flow: rows;
          width: 100%;
          /* grid-auto-flow: column; */
          grid-template-areas:
            "banner item1 item2 item3 item4"
            "banner . . . email"
            "banner . . social1 social2";
        }

        @media (max-width: 600px) {
          .header-grid {
            display: grid;
            /* align-items: end; */
            justify-content: center;
            justify-items: center;
            gap: 1rem;
            /* grid-template-columns: 200px minmax(300px 1fr); */
            /* grid-auto-flow: rows; */
            /* width: 100%; */
            grid-template-areas:
              "banner"
              "item1"
              "item2"
              "item3"
              "item4"
              "email"
              "social1"
              "social2";
          }
        }
        .grid-logo {
          grid-row-start: banner;
          grid-row-end: banner;
          grid-column-start: banner;
          grid-column-end: banner;
          justify-self: start;
        }
        .item1 {
          grid-area: item1;
        }
        .item2 {
          grid-area: item2;
        }
        .item3 {
          grid-area: item3;
        }
        .item4 {
          grid-area: item4;
        }
        .grid-email {
          grid-area: email;
        }
        /* .grid-social {
          grid-area: social;
        } */
        .grid-social1 {
          grid-area: social1;
        }
        .grid-social2 {
          grid-area: social2;
        }
      `}</style>
    </div>
  );
}
