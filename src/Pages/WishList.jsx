import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../Store/Slices/wishlistSlice";
import { addToCart } from "../Store/Slices/cartSlice";
import "./WishList.css";

export default function WishList() {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div className="wishlistSection">
      <h2 className="sectionTitle">Mes Favoris</h2>
      {wishlistItems.length === 0 ? (
        <h3>Votre liste de favoris est vide.</h3>
      ) : (
        <div className="wishlistItems">
          {wishlistItems.map((product) => (
            <div className="wishlistItem" key={product.id}>
              <div className="imgDiv">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="productInfo">
                <h3>{product.name}</h3>
                <h5>{product.price} Dh</h5>
                <div className="wishlistActions">
                  <button
                    className="addToCartButton"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Ajouter au panier
                  </button>
                  <button
                    className="removeBtn"
                    onClick={() => dispatch(removeFromWishlist(product.id))}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
