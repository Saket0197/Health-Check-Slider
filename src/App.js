import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[url('./assets/bgImage2.jpg')] bg-no-repeat bg-cover flex flex-col justify-center items-center">
      <div className="w-[80%] md:w-[95%] min-h-[75vh] h-fit rounded-lg bg-[#ffffff2a] backdrop-blur-[8px] p-4 flex flex-col items-center gap-4 mb-2">
        <Header></Header>
        <Card></Card>
      </div>
    </div>
  );
};

export default App;
