import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import ReserveHeader from "./components/ReserveHeader";
import Form from "./components/Form";
const ReservationPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <Navbar />
        {/* NAVBAR END */}
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            {/* HEADER */}
            <ReserveHeader />
            {/* HEADER */}
            {/* FORM */}
            <Form />
            {/* FORM */}
          </div>
        </div>
        {/* NAVBAR END */}
      </main>
    </main>
  );
};

export default ReservationPage;
