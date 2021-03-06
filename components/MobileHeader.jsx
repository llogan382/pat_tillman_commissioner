import React, { useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import patTillmanLogo from "../public/patTillmanLogo.jpg";

export default function MobileHeader() {

  function useToggle(initialValue = false) {
    const [value, setValue] = React.useState(initialValue);
    const toggle = React.useCallback(() => {
      setValue(v => !v);
    }, []);
    return [value, toggle];
  }
  const [isOn, toggleIsOn] = useToggle();
  {isOn ? true : false}

  return (
    <>
      <Head>
        <title>Pat Tillman | County Commissioner</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>


      <header className="header" id="headerId">
        <Link
        href="/"
        passHref
        className="logo">
                  <Image
            className="navLogo"
            src={patTillmanLogo}
            width={100}
            height={76}
            alt="Pat Tillman Logo"
          />
        </Link>


        <input className="menu-btn" type="checkbox" checked={isOn} id="menu-btn" onClick={toggleIsOn} onChange={()=> {}} />
        <label className="menu-icon" htmlFor="menu-btn" >
          <span className="navicon"></span>
        </label>
        <ul className="menu" onClick={toggleIsOn}>
          <li>
            <Link className="mobile-link"  passHref href="/experience">Experience</Link>
          </li>
          <li>
            <Link className="mobile-link" passHref href="/service">
              Service
            </Link>
          </li>
          <li>
            <Link className="mobile-link" passHref href="/priorities">
Priorities
            </Link>
          </li>
          <li className="mobile-link">
            <Link passHref href="/donate">
Donate
            </Link>
          </li>
          <li>
            <Link
              href="mailto:
      pat@tillmanforcountycommissioner.com"
      passHref>
              pat@tillmanforcountycommissioner.com
            </Link>
          </li>

          <li>
            <Link
              href="https://www.tiktok.com/@patricktillman1?lang=en"
              passHref
            >

                <Image
                  src="/tiktok.png"
                  width={25}
                  height={25}
                  alt="Pat Tillman Logo"
                />
            </Link>
          </li>
          <li>
            <Link passHref href="https://www.facebook.com/patrick.tillman.31">
              <Image
                className="social-icon"
                src="/facebook.png"
                width={25}
                height={25}
                alt="Pat Tillman Logo"
              />
            </Link>
          </li>
        </ul>
      </header>

      <style jsx>{`
        /* For the hamburger menu */

        a{
          color: red !important;
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
          z-index: 3;

        }

        .header li {
          display: block;
          /* padding: 20px 20px; */
          border-right: 1px solid #f4f4f4;
          text-align: center;
          text-decoration: none;
        }
        .social-icon {
          height: 200px;
          background-color: green;
        }

        /* span {
          display: block;
          padding: 20px 20px;
          border: 2px solid red;
          text-decoration: none;
        } */

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
          /* max-height: 240px; */
          max-height: 100%;
          border-bottom: 3px solid green;
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
            /* float: left; */
            margin: auto;
            border: 2px solid red;
          }
          .header li a {
            /* padding: 20px 30px; */
          }
          .header .menu {
            clear: none;
            /* float: right; */
            max-height: none;
          }
          .header .menu-icon {
            display: none;
          }
        }

        @media (min-width: 600px) {
          #headerId {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
