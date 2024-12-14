import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="px-4 md:px-10">
        <Services />
      </div>
    </div>
  );
};

export default Home;
