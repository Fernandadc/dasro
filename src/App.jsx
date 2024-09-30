import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import ProductCard from "./components/product-card";
import ProductBalloon from "./components/product-balloon";
import TextImgBlock from "./components/text-img-block";
import TextCarouselBlock from "./components/text-carousel-block";
import loc from "./assets/localization";



function App() {
  return (
    <>
      <Header />
      <div class="page-home">
        <div class="featured">
          <div>
            {loc.homeTitle}
            <ProductCard />
            <ProductBalloon />
          </div>
          <div>
            <ProductCard />
            <ProductBalloon />
          </div>
          <div>
            <ProductBalloon />
            <ProductCard />
          </div>
        </div>
        <TextImgBlock />
        <div class="featured">
          <div>
            <ProductCard />
            <ProductBalloon />
          </div>
          <div>
            <ProductBalloon />
            <ProductCard />
          </div>
          <div>
            <ProductCard />
            <ProductBalloon />
          </div>
        </div>
        <TextCarouselBlock/>
      </div>
    </>
  );
}

export default App;
