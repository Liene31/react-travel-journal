import { Entry } from "../components/Entry.jsx";
import { Header } from "../components/Header.jsx";
import data from "../data.js";

export function App() {
  const travelData = data.map((data) => {
    return (
      <Entry
        image={data.img}
        country={data.country}
        googleMapsLink={data.googleMapsLink}
        name={data.title}
        date={data.dates}
        description={data.text}
      />
    );
  });

  return (
    <>
      <Header />
      {travelData}
    </>
  );
}
