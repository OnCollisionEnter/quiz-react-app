import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartReducer } from "../../reducers/cart";
import { addToCart } from "../../actions/cart";
import Container from "../../components/containers/container";

const Cart = () => {
  const { id } = useParams();
  const useQty = useLocation();
  //this will always return 1 but however - you cant buy a course twice
  const qty = useQty.search ? Number(useQty.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
    console.log(`SEPETTE: ${cartItems}`);
    console.log(cartItems);
  }, [dispatch, id, qty]);

  return (
    <div>
      <div className="mh-100vh">
        <Navbar />
        Cart
        <Container>
          {cartItems.length === 0 ? (
            <Text>Sepetiniz Boştur</Text>
          ) : (
            <Text>Null</Text>
          )}
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
