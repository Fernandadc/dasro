import React from "react";


function ProductCard (props){
    if (props?.product == null) return (<div></div>);
    
    return (
        <div class="product-card">
            {RenderProduct(props.product)}
        </div>
    );
}

function RenderProduct (product){
    return (
        <div class="product-card-render">
            <img src={product.img} alt="foto Anne" />
            <span>{product.name}</span>
        </div>
    );
}

export default ProductCard;