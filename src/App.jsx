import "./App.css";
import db, { cakes } from "./assets/database";
import loc from "./assets/localization";
import Header from "./components/header";
import ProductBalloon from "./components/product-balloon";
import ProductCard from "./components/product-card";
import TextCarouselBlock from "./components/text-carousel-block";
import TextImgBlock from "./components/text-img-block";

function App() {
  return (
    <>
      <Header />
      <div className="page-home">
        <div className="featured">
          <div>
            {loc.homeTitle}
            <ProductCard
              products={[db.cakes[cakes.anne], db.cakes[cakes.diamanteNegro], db.cakes[cakes.macron]]}
            />
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
        <div className="featured">
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
        <TextCarouselBlock />
      </div>
    </>
  );
}

export default App;
