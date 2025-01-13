import React from "react";
import db, { cakes } from "../assets/database";
import loc from "../assets/localization";
import Footer from "../components/footer";
import Header from "../components/header";
import ProductBalloon from "../components/product-balloon";
import ProductCard from "../components/product-card";
import TextCarouselBlock from "../components/text-carousel-block";
import TextImgBlock from "../components/text-img-block";

function Homepage() {
    return (
      <>
        
        <div className="page-home">
          <div className="featured">
            <div>
              <ProductCard
                products={[db.cakes[cakes.anne], db.cakes[cakes.diamanteNegro], db.cakes[cakes.macron]]}
              />
              <ProductBalloon />
            </div>
            <div>
              <ProductCard products={[db.cakes[cakes.anne], db.cakes[cakes.diamanteNegro], db.cakes[cakes.macron]]}/>
              <ProductBalloon />
            </div>
            <div>
              <ProductBalloon inverted={true}/>
              <ProductCard products={[db.cakes[cakes.anne], db.cakes[cakes.diamanteNegro], db.cakes[cakes.macron]]}/>
            </div>
          </div>
          <TextImgBlock />
          <div className="featured">
            <div>
              <ProductCard products={[db.cakes[cakes.anne], db.cakes[cakes.diamanteNegro], db.cakes[cakes.macron]]}/>
              <ProductBalloon />
            </div>
            <div>
              <ProductBalloon inverted={true}/>
              <ProductCard products={[db.cakes[cakes.anne], db.cakes[cakes.diamanteNegro], db.cakes[cakes.macron]]}/>
            </div>
            <div>
              <ProductCard products={[db.cakes[cakes.anne], db.cakes[cakes.diamanteNegro], db.cakes[cakes.macron]]}/>
              <ProductBalloon />
            </div>
          </div>
          <TextCarouselBlock />
        </div>
        
      </>
    );
  }
  
  export default Homepage;