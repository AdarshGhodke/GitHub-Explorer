import React from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <>
      {/* serach components */}
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;
