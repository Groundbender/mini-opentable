import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import RestaurantHeader from "./components/RestaurantHeader";
import RestaurantNavbar from "./components/RestaurantNavbar";
import RestaurantTitle from "./components/RestaurantTitle";
import RestaurantRating from "./components/RestaurantRating";
import RestaurantImages from "./components/RestaurantImages";
import RestaurantReviews from "./components/RestaurantReviews";
import RestaurantDescription from "./components/RestaurantDescription";
import RestaurantReservationCard from "./components/RestaurantReservationCard";

const RestaurantDetails = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <Navbar />
        {/* NAVBAR */}
        {/* HEADER */}
        <RestaurantHeader />
        {/* HEADER */}
        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* RESAURANT NAVBAR */}
            <RestaurantNavbar />
            {/* RESAURANT NAVBAR */}
            {/* TITLE */}
            <RestaurantTitle />
            {/* TITLE */}
            {/* RATING */}
            <RestaurantRating />
            {/* RATING */} {/* DESCRIPTION */}
            <RestaurantDescription />
            {/* DESCRIPTION */}
            {/* IMAGES */}
            <RestaurantImages />
            {/* IMAGES */}
            {/* REVIEWS */}
            <RestaurantReviews />
            {/* REVIEWS */}
          </div>
          <div className="w-[27%] relative text-reg">
            <RestaurantReservationCard />
          </div>
        </div>
        {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}{" "}
        {/* RESERVATION
    CARD PORTION */}
      </main>
    </main>
  );
};

export default RestaurantDetails;
