import React from "react";
import Layout from "../../components/Layout/Layout";
import Contacts from "../../components/Contacts/Contacts";

const Home = () => {
  return (
    <>
      <Layout title={"Home page"}>
        <h2>Home page</h2>
        <Contacts />
      </Layout>
    </>
  );
};

export default Home;
