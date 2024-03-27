import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Product } from "../Types/Product";

interface GridResultsProps {
  products: Product[];
}

const GridResults: React.FC<GridResultsProps> = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products &&
        products.map((product: Product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card style={{ height: "400px" }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Category: {product.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default GridResults;
