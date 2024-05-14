// import styles from '../styles/Home.module.css'
import RestaurantList from "../components/RestaurantList";
import Container from "../components/styled/Container";

export default function Home({ restaurants }) {
  return (
    <Container>
      <RestaurantList restaurants={restaurants} />
    </Container>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://restaurant-api.dicoding.dev/list");
  const { restaurants } = await response.json();

  return {
    props: {
      restaurants,
    },
  };
}
