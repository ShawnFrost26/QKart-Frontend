import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card">
        <CardMedia
        component="img"
        // height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div"> */}
        <Typography>
          {product.name}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary"/> */}
          {/* {product.category} */}
        <Typography paddingY="0.5rem" fontWeight="700">$
        {product.cost}
        </Typography>
        {/* <Typography variant="h6" color="text.primary">
          ${product.cost}
        </Typography> */}
        <Rating name="read-only" value={product.rating} precision={0.5}readOnly />
      </CardContent>
      <CardActions className = "card-actions">
        <Button
        className = "card-btn"
        fullWidth
          variant="contained"
          size="small"
          onClick={() => handleAddToCart(product)}
          startIcon={<AddShoppingCartOutlined />}
        >
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
