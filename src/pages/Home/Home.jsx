import React from "react";
import Layout from "../../components/Layout/Layout";
import Reviews from "../../components/Reviews";
import Services from "../../components/Services";
import Contacts from "../../components/Contacts/Contacts";

const Home = () => {
  return (
    <>
      <Layout title={"Home page"}>
        <Reviews />
        <Services />

        <Contacts />
      </Layout>
    </>
  );
};

export default Home;
