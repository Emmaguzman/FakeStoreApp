import { Container } from "@mui/material";
import { useGetProductsQuery } from "./api/product";

import Header from "./components/Header";

import GridResults from "./components/GridResults";

export default function App() {
  const {
    data: products,
    error: productsError,
    isLoading: productsLoading,
  } = useGetProductsQuery();

  if (productsLoading) {
    return <div>Cargando...</div>;
  }
  if (productsError || !products) {
    return <div>Error: </div>;
  }

  return (
    <Container>
      <Header />
      <GridResults products={products} />
    </Container>
  );
}
