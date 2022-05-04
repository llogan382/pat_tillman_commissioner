export default function Endorsements(){
  return(
    <>
    <section>
    <h3>Endorsements</h3>
    <div className="endorsement-wrapper">
      <div className="endorsement_card">
        <div className="endorsement_title">Tony Wilkins</div><p><i>-Former City Council and candidate for City Council District 5</i></p>
      </div>
      <div className="endorsement_card">
        <div className="endorsement_title">Dave Craven</div><p><i>-NC State Senator</i></p>
      </div>
      <div className="endorsement_card">
        <div className="endorsement_title">Victor Jones </div><p><i>-High Point City Council</i></p>
      </div>
      <div className="endorsement_card">
        <div className="endorsement_title">Patrick Davies</div><p><i>-Executive Director The Heroe’s Center</i></p>
      </div>
      <div className="endorsement_card">
        <div className="endorsement_title">Jim Melvin</div><p><i>-Former Mayor and CEO of the Bryan Foundation</i></p>
      </div>
      <div className="endorsement_card">
        <div className="endorsement_title">Greensboro Builders Association</div><p><i></i></p>
      </div>
      </div>
    </section>

      <style jsx>{`
      h3{
        text-align: center;
        padding: 2rem 0;
      }

      .endorsement-wrapper{

          max-width: 1200px;
          margin: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
grid-auto-flow: row;
grid-auto-rows:        140px;
align-content: stretch;

      }
      .endorsement_title{
        background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,0.690896341446735) 0%, rgba(28,170,5,1) 0%, rgba(139,206,132,1) 100%);
color: white;
height: 50%;
/* margin: auto; */
padding: 1rem 0 0 1rem;
font-size: 1.4rem;
font-weight: bold;
border-radius: 7px 7px 0 0;

/* text-align: center; */
      }
            .endorsement_card{
              /* display: flex; */
              /* flex-direction: column; */
              /* justify-content: space-evenly; */
              /* align-items: stretch; */
              /* align-content: space-evenly; */

        border: 2px solid grey;
        border-radius: 8px;
      }
      p, i {
        line-height: 1;
        font-size: 1.2rem;
padding-left: 1rem;

      }
`}</style>
    </>

  )
}
