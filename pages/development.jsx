import PTCHeader from "../components/PTCHeader";


export default function Home() {
  return (
    <>
    <PTCHeader />

    <div className="layout-wrapper">
      here are a few notes that can be helpful:

      <div className="color-palette">
<div className="colorScheme colorScheme1">
  <p>
  #1CAA05
  </p>
<p>
  rgb(28, 170, 5)

</p>
<p>
  "campaign green"
</p>
  </div>
<div className="colorScheme colorScheme2">
  <p>
  #A620F7
  </p>
  <p>
rgb(163, 32, 245)
  </p>
  <p>
    "purple"
  </p>
  </div>
<div className="colorScheme colorScheme3">

    <p>
  #700EAB

  </p>
  <p>
rgb(111, 14, 171)
  </p>
  <p>
    "army green"
  </p>
  </div>
<div className="colorScheme colorScheme4">
<p>
  #F73420
</p>
  <p>
rgb(247, 52, 32)
  </p>
  <p>
    "red"
  </p>
  </div>
<div className="colorScheme colorScheme5">
  <p>
  #AB1C0E
</p>
  <p>
rgb(171, 28, 14)
  </p>
  <p>
    "dark red"
  </p>
  </div>

      </div>
      </div>
      <style jsx>{`

      .layout-wrapper{
          display: flex;
          flex-direction: column;
  max-width: 1200px;
  margin: auto;
      }


.color-palette{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.colorScheme{
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
}
.colorScheme1{
  background-color: #1CAA05;
}
.colorScheme2{
  background-color: #A320F5;
  color: white;

}
.colorScheme3{
  background-color: #6F0EAB;
  color: white;
}
.colorScheme4{
  background-color: #F73420;
}
.colorScheme5{
  background-color: #AB1C0E;
  color: white;

}

      `}</style>
    </>
  );
}
