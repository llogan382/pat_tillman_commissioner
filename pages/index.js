import PTCHeader from "../components/PTCHeader";
import GridGallery from "../components/GridGallery";

export default function Home() {
  return (
    <>
      <PTCHeader />
      <section>
        <div className="headerContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </section>
      <section>
        <div className="headerContent"></div>
      </section>
      <GridGallery />
    </>
  );
}
