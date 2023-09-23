import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import BookingForm from "./components/BookingForm";

function App() {
  const [bookingFormOpen, setBookingFormOpen] = useState(false);

  function openBookingFormHandler() {
    setBookingFormOpen(!bookingFormOpen);
  }

  return (
    <>
      {bookingFormOpen && <BookingForm onCloseLayout={openBookingFormHandler} />}
      <Header onOpenLayout={openBookingFormHandler} />
      <Hero onOpenLayout={openBookingFormHandler} />
      <Highlights />
      <footer style={{ height: "5rem" }}></footer>
    </>
  );
}

export default App;
