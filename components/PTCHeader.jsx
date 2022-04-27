import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import patTillmanLogo from '../public/patTillmanLogo.jpg'




export default function PTCHeader() {
  return (
    <div>
      <Head>
        <title>Pat Tillman | County Commissioner</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet" />

<meta property="og:title" content="Pat Tillman | For County Commissioner" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://pat-tillman-commissioner-n12tlvve4-luke-loganwebdev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpatTillmanLogo.083990b4.jpg&w=640&q=75" />
<meta property="og:url" content="https://www.tillmanforcountycommissioner.com/" />




<meta name="twitter:card" content="Pat Tillman | For County Commissioner" />
<meta name="twitter:site" content="@PatTillman19" />
<meta name="twitter:creator" content="@PatTillman19" />
      </Head>

    <nav>
      <div className="logo">
    <Image className='navLogo' src={patTillmanLogo}
    alt="Pat Tillman Logo" />
      </div>
      <div className="banner_group">
        <div className="links page_group">
              <Link className="page_link experience" href="/experience"><a>Experience</a></Link>
              <Link className="page_link service" href="/service"><a>Service</a></Link>
              <Link className="page_link priorities" href="/priorities"><a>Priorities</a></Link>
                            <Link className="page_link donate" href="/donate"><a>Donate</a></Link>
        </div>
        <div className="links email_group">
          <div className="page_link">
    <Link className="page_link email" href="mailto:
      pat@tillmanforcountycommissioner.com"><a>Email</a></Link>
            </div>
        </div>

        <div className="links social_group">
          <Link className="social_link FB" href="https://www.facebook.com/patrick.tillman.31" ><a target="_blank" rel="noopener noreferrer">FB</a></Link>
          <Link className="social_link FB" href="https://www.tiktok.com/@patricktillman1?lang=en
" ><a target="_blank" rel="noopener noreferrer">TT</a></Link>
          <div className="social_link">LI</div>
        </div>
      </div>
    </nav>
<style jsx>{`
 nav{
   padding: 3rem 0;
  display: flex;
  max-width: 1200px;
  margin: auto;
}

.banner_group{
  display: flex;
  flex-direction: column;
  width: 100%;
justify-content: flex-end;
gap: 20px;
}

.links{
  display: flex;
  flex-flow: row wrap;
    justify-content: flex-end;
}

.page_group{
  gap: 8rem;
}
.social_group {
  gap: 1rem;
}
@media all and (max-width: 800px) {
  .page_link {
    /* When on medium sized screens, we center it by evenly distributing empty space around items */
    justify-content: space-around;
  }
}
@media all and (max-width: 500px) {
  .page_link {
    /* When on medium sized screens, we center it by evenly distributing empty space around items */
    flex-direction: column;
  }
}

      `}</style>


    </div>
  )
}

