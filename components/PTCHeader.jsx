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
      </Head>
      <nav>

      <div className="header-grid">
        <div className="grid-name">
        <h1>Pat Tillman</h1>
        </div>
        <div className="grid-office">
        <h2>County Commissioner</h2>
        </div>
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
            pat@tillmanforcountycommissioner.com
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
          <Link href="https://www.facebook.com/pt4d3countycommissioner">
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
      </nav>

      <style jsx>{`
        .header-grid {
          padding: 0 1rem;
          display: grid;
          align-items: end;
          /* justify-content: end; */
          justify-items: end;
          /* grid-template-columns: 200px minmax(300px 1fr); */
          grid-auto-flow: rows;
          width: 100%;
          max-width: 1200px;
          margin: auto;
          color: white;
          font-weight: 700;
          /* grid-auto-flow: column; */
          /* grid-template-areas:
            "banner item1 item2 item3 item4"
            "banner . . . email"
            "banner . . social1 social2";
        } */
        grid-template-areas:
            "name office item1 item2 item3 item4"
            "name office . . . email"
            "name office . . social1 social2";
        }
        h1{
          font-size: 3rem;
        }
        .grid-name {
          grid-row-start: name;
          grid-row-end: name;
          grid-column-start: name;
          grid-column-end: name;
          justify-self: start;
          font-size: 3rem;
        }
        .grid-office {
          grid-area: office;
          grid-row-start: office;
          grid-row-end: office;
          grid-column-start: office;
          grid-column-end: office;
          align-self: center;
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
          grid-column-start: 4;
          grid-column-end: span 3;
        }
        .grid-social1 {
          grid-area: social2;
          padding-right: 50px;
        }
        .grid-social2 {
          grid-area: social2;
          justify-self: end;
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
          .grid-logo {
            justify-self: center;
          }
          .grid-email {
            grid-area: email;
            grid-column-start: 1;
            grid-column-end: span 1;
          }
          /* .grid-social1 {
            grid-area: social1;
            grid-column-start: 1;
            justify-self: center;
            grid-column-end: span 1;
          } */

          .grid-social1 {
            grid-area: social1;
            padding-right: 0px;
          }
          .grid-social2 {
            grid-area: social2;
            justify-self: center;
          }
        }

        /* For the hamburger menu */
        @media (max-width: 600px) {
          .header-grid {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
