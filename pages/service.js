import PTCHeader from "../components/PTCHeader";

export default function Service() {
  return (
    <>
      <PTCHeader />
      <section>
        <h2>Service content coming soon</h2>
      </section>
      <section>
        <div className="headerContent"></div>
      </section>

      <style jsx>{`
        section {
          padding: 2rem 0;

          display: flex;
          max-width: 1200px;
          margin: auto;
        }
      `}</style>
    </>
  );
}
