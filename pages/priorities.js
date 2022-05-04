import PTCHeader from "../components/PTCHeader";

export default function Priorities() {
  return (
    <>


      <section>
            <h1>
      Priorities
    </h1>
    <ol>
      <li>For Guilford County to be the most competitive (business & industry friendly) County in the Southeast. I believe with the right policy makers paired with strategic priorities we can build and sustain a <strong>Guilford Renaissance</strong>

      </li>
      <li>I will work so that Guilford county is the safest place to live, work and play. It is unacceptable to have citizens in fear of going anywhere , at any time. I will support and advocate relentlessly for our men and women in law enforcement and first responders
</li>
      <li>I envision Guilford County to be the cleanest and most welcoming County in the state
</li>
<li>Keep tax revenue neutral
</li>
    </ol>
      </section>

      <style jsx>{`
        section {
          padding: 2rem 0;

          /* display: flex; */
          max-width: 1200px;
          margin: auto;
        }
        @media (max-width: 600px) {
          section {
            padding-top: 7rem;
          }
        }
      `}</style>
    </>
  );
}
