import React from "react";
import Banner from "./Component/Banner";
import Service from "./Component/Service";
import Customer from "./Component/Customer";
import Faq from "./Component/Faq";
import Body1 from "./Component/Body1";
import Whyus from "./Component/Whyus";
import Footer from "./Component/Footer";
import Nav from "./Component/Nav";



const App = () => {
  return (
    <main className="overflow-y-hidden  antialiased">
      <Nav/>
      <Banner />
      <Body1/>  
      <Service />
      <Customer/>
      <Faq/>
      <Whyus/>
      <Footer/>
    </main>
  );
};

export default App;
