import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import patTillmanLogo from '../public/patTillmanLogo.jpg'




export default function PTCHeader() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

<nav className="navMenu">
  <div className="navLogo">
    <Image className='navLogo' src={patTillmanLogo}
    alt="Pat Tillman Logo" />


  </div>


    <Link className="experience" href="/experience"><a>Experience</a></Link>
    <Link className="service" href="/service"><a>Service</a></Link>
    <Link className="priorities" href="/priorities"><a>Priorities</a></Link>

    <div className="navEmail">
      pat@tillmanforcountycommissioner.com
    </div>
    <div className="navFb">
      FB
    </div>
    <div className="navTT">
      TT
    </div>


</nav>

<style jsx>{`
  .navMenu {
    display: grid;
    grid-template-columns: 300px auto auto auto;
  grid-template-rows: 120px auto auto;
grid-template-areas: "logo experience service priorities"
"logo . . email"
"logo . fb tt";
align-items: end;
justify-items: end;
  }

.navLogo {
  grid-area: logo;
  /* grid-row-start: 1; */
  /* grid-row-end: 4; */
  /* align-self: <center></center>; */
}
.experience {
  grid-area: experience;
}
.service {
  grid-area: service;
}
.priorities {
  grid-area: priorities;
}
.navEmail {
  grid-area: email;

}
.navFb{
  grid-area: fb;
}
.navTT{
  grid-area: tt;
}
}

      `}</style>


    </div>
  )
}

