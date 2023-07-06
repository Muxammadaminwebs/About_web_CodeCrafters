import React from "react";
import Layout from "../../components/Layout/Layout";
import Contacts from "../../components/Contacts/Contacts";

const Home = () => {
  return (
    <>
      <Layout title={"Home page"}>
        <Contacts />
      </Layout>
    </>
  );
};

export default Home;
