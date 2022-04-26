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
        </div>
        <div className="links email_group">
          <div className="page_link">
      pat@tillmanforcountycommissioner.com
            </div>
        </div>
        <div className="links social_group">
          <div className="social_link">FB</div>
          <div className="social_link">TT</div>
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

