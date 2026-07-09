import { createRoot } from "react-dom/client";
import Pizza from "./pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order now</h1>
      <Pizza name="Pepperoni" description="Classic pizza with tomato sauce, mozzarella cheese, and fresh basil." image={"../api/public/pizzas/pepperoni.webp"}/>
      <Pizza name="Hawaiian" description="A popular pizza topped with tomato sauce, mozzarella cheese, and pepperoni slices." image={"../api/public/pizzas/hawaiian.webp"} />
      <Pizza name="Americano" description="A delicious pizza loaded with a variety of fresh vegetables, including bell peppers, onions, mushrooms, and olives." image={"../api/public/pizzas/big_meat.webp"} /> 
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
