import AllCategories from "../Home/AllCategories";
import TopSlider from "../Home/TopSlider";

const Home = () => {
  return (
    <main className="p-4 md:px-6 lg:px-28">
      <div className="grid lg:grid-cols-[250px_1fr] gap-4">
        {/* Sidebar - only show on large screens */}
        <div className="hidden lg:block">
          <AllCategories />
        </div>

        <div className="">
          <TopSlider />
        </div>
      </div>
    </main>
  );
};

export default Home;
