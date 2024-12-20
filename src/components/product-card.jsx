import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function ProductCard(props) {
  const [current, setCurrent] = useState(0);

  // Null check for valid products.
  if (props?.products == null) return <div></div>;

  // Carousel logic.
  return (
    <div className="product-card">
      <button
        className={
          "progress-button progress-left " + (current == 0 ? "invisible" : "")
        }
        onClick={() => setCurrent(current - 1)}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className={
          "progress-button progress-right " +
          (current == props.products.length - 1 ? "invisible" : "")
        }
        onClick={() => setCurrent(current + 1)}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div className="progress-bar">
        {props.products.map((product) => (
          <FontAwesomeIcon
            className={product == props.products[current] ? "selected" : ""}
            icon={faCircle}
          />
        ))}
      </div>
      <div className="product-card-carousel">
        <div
          className="product-card-container"
          style={{ left: `${-100 * current}%` }}
        >
          {props.products.map(RenderProduct)}
        </div>
      </div>
    </div>
  );
}

// Deals with a single product card rendering.
function RenderProduct(product) {
  return (
    <div className="product-card-render">
      <div className="card-image">
        <img src={product.image} alt={`imagem torta ${product.name}`} />
      </div>
      <div className="card-description">
        <span>Bolos</span>
        <h4>{product.name}</h4>
      </div>
    </div>
  );
}

export default ProductCard;
