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

      <header className="header">
        <a href="" className="logo">
          CSS Nav
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="/service">
              <a>Service</a>
            </Link>
          </li>
          <li>
            <Link href="/priorities">
              <a>Priorities</a>
            </Link>
          </li>
          <li>
            <Link href="/donate">
              <a>Donate</a>
            </Link>
          </li>
          <li>
            <Link
              href="mailto:
      pat@tillmanforcountycommissioner.com"
            >
              pat@tillmanforcountycommissioner.com
            </Link>
          </li>
        </ul>
      </header>

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
          /* grid-auto-flow: column; */
          grid-template-areas:
            "banner item1 item2 item3 item4"
            "banner . . . email"
            "banner . . social1 social2";
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
          grid-column-start: 3;
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

        a {
          color: #000;
        }

        /* header */

        .header {
          background-color: #fff;
          box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
          position: fixed;
          width: 100%;
          z-index: 3;
        }

        .header ul {
          margin: 0;
          padding: 0;
          list-style: none;
          overflow: hidden;
          background-color: #fff;
        }

        .header li a {
          display: block;
          padding: 20px 20px;
          border-right: 1px solid #f4f4f4;
          text-decoration: none;
        }

        .header li a:hover,
        .header .menu-btn:hover {
          background-color: #f4f4f4;
        }

        .header .logo {
          display: block;
          float: left;
          font-size: 2em;
          padding: 10px 20px;
          text-decoration: none;
        }

        /* menu */

        .header .menu {
          clear: both;
          max-height: 0;
          transition: max-height 0.2s ease-out;
        }

        /* menu icon */

        .header .menu-icon {
          cursor: pointer;
          display: inline-block;
          float: right;
          padding: 28px 20px;
          position: relative;
          user-select: none;
        }

        .header .menu-icon .navicon {
          background: #333;
          display: block;
          height: 2px;
          position: relative;
          transition: background 0.2s ease-out;
          width: 18px;
        }

        .header .menu-icon .navicon:before,
        .header .menu-icon .navicon:after {
          background: #333;
          content: "";
          display: block;
          height: 100%;
          position: absolute;
          transition: all 0.2s ease-out;
          width: 100%;
        }

        .header .menu-icon .navicon:before {
          top: 5px;
        }

        .header .menu-icon .navicon:after {
          top: -5px;
        }

        /* menu btn */

        .header .menu-btn {
          display: none;
        }

        .header .menu-btn:checked ~ .menu {
          max-height: 240px;
        }

        .header .menu-btn:checked ~ .menu-icon .navicon {
          background: transparent;
        }

        .header .menu-btn:checked ~ .menu-icon .navicon:before {
          transform: rotate(-45deg);
        }

        .header .menu-btn:checked ~ .menu-icon .navicon:after {
          transform: rotate(45deg);
        }

        .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
        .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
          top: 0;
        }

        /* 48em = 768px */

        @media (min-width: 48em) {
          .header li {
            float: left;
          }
          .header li a {
            padding: 20px 30px;
          }
          .header .menu {
            clear: none;
            float: right;
            max-height: none;
          }
          .header .menu-icon {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
