
import AllCategories from "../Home/AllCategories";
import ButtomSlider from "../Home/ButtomSlider";
import TopSlider from "../Home/TopSlider";
import WeeklySlider from "../Home/WeeklySlider";

const Home = () => {
  return (
    <main className="p-0 md:p-4 md:px-6 lg:px-28">
      <div className="grid grid-cols-5 gap-4">
        {/* Sidebar */}
        <div className="col-span-1 hidden lg:block">
          <AllCategories />
        </div>

        {/* Main Content */}
        <div className="col-span-5 lg:col-span-4">
          <TopSlider />
          <ButtomSlider />
        </div>
      </div>
      <WeeklySlider/>
    </main>
  );
};

export default Home;
