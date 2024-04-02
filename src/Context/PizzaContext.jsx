import { createContext, useState, useEffect } from "react"
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const PizzaContext = createContext();


const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [allPizzas, setAllPizzas] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const cantidad = 1;


  const getPizzas = async () => {
    const response = await fetch("/pizzas.json");
    const data = await response.json();
    setPizzas(data);

  };
  useEffect(() => {
    getPizzas();
  }, []);

  const allToCarrito = (pizza) => {
    toast.success("Pizza añadida al carrito");    
    const existingProduct = allPizzas.find(item => item.name === pizza.name);
    if (existingProduct) {
      const updatedProducts = allPizzas.map(item =>
        item.name === pizza.name ? { ...item, cantidad: item.cantidad + cantidad } : item
      );
      setAllPizzas(updatedProducts);
      setTotal(total + pizza.price * cantidad);
      setCountProducts(countProducts + cantidad);
    } else {
      setAllPizzas([...allPizzas, { ...pizza, cantidad }]);
      setTotal(total + pizza.price * cantidad);
      setCountProducts(countProducts + cantidad);
    }
  };
  console.log(allPizzas)
  //console.log(total)
  // console.log(countProducts)

  const removeToCarrito = (product) => {
    const removedProduct = allPizzas.find(item => item.name === product.name);

    if (product.cantidad === 1) {
      const removeCarrito = allPizzas.filter(item => item.cantidad > 1)
      setAllPizzas(removeCarrito)
    } else {
      const updatedProducts = allPizzas.map(item =>
        item.name === product.name ? { ...item, cantidad: item.cantidad - 1 } : item);
      setAllPizzas(updatedProducts)
    }

    if (removedProduct) {
      const removedTotal = total - removedProduct.price;
      const removedCount = countProducts - 1;

      removedTotal >= 0 && setTotal(removedTotal);
      removedCount >= 0 && setCountProducts(removedCount);

    }
  };



  return (
    <PizzaContext.Provider value={{ pizzas, allToCarrito, allPizzas, countProducts, total, removeToCarrito }}>
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaProvider