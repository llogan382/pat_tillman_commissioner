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
  #E8F8E3
  </p>
  <p>
  rgb(232, 248, 227)
  </p>
  <p>
    "light green"
  </p>
  </div>
<div className="colorScheme colorScheme3">

    <p>
  #6F9568

  </p>
  <p>
rgb(111, 149, 104)
  </p>
  <p>
    "army green"
  </p>
  </div>
<div className="colorScheme colorScheme4">
<p>
  #8BCE84
</p>
  <p>
    rgb(139, 206, 132)
  </p>
  <p>
    "neutral green"
  </p>
  </div>
<div className="colorScheme colorScheme5">
  <p>
  #81DD72
</p>
  <p>
    rgb(139, 206, 132)
  </p>
  <p>
    "lime green"
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
  background-color: #E8F8E3;
}
.colorScheme3{
  background-color: #6F9568;
}
.colorScheme4{
  background-color: #8BCE84;
}
.colorScheme5{
  background-color: #81DD72;
}

      `}</style>
    </>
  );
}
