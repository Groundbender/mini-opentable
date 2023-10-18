import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import RestaurantNavbar from "../components/RestaurantNavbar";
import RestaurantMenu from "../components/RestaurantMenu";
import RestaurantHeader from "../components/RestaurantHeader";

const RestaurantMenuPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />

        <RestaurantHeader />

        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantNavbar />

            <RestaurantMenu />
            {/* MENU */}
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
};

export default RestaurantMenuPage;
