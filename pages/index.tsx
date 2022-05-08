import type { NextPage } from "next";
import Navbar from "@components/navbar";
import { AuthType } from "@components/navbar/navbar";
import Header from "@components/headers/header";
import Biography from "@components/biography";

const Home: NextPage = () => {
  return (
    <div>
      {/* <Header /> */}
      <main>
        <Biography />
      </main>
    </div>
  );
};

export default Home;
