import Navbar from "./components/Navbar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white ">
        <Navbar />
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap ">
            {Array.from({ length: 8 }).map((_, i) => (
              <RestaurantCard key={i} />
            ))}
          </div>
        </main>
      </main>
    </main>
  );
}
