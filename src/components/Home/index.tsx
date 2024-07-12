import React from "react";

interface UserActivityProps {}

const Home: React.FC<UserActivityProps> = () => {

  return (
    <div className="p-5 w-full text-center">
      <h1 className=" text-red-500 text-xl font-bold">Bonjour</h1>
      <div className="font-bold my-5">Choisissez un utilisateur</div>
      <div className="flex justify-center gap-5 text-2xl font-bold text-red-500 underline mt-5">
        <button><a href="http://localhost:5173/user/18">Cecilia</a></button>
        <button><a href="http://localhost:5173/user/12">Karl</a></button>
      </div>
    </div>
  )
};

export default Home;
