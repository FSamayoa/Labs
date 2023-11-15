import ProductList from "../components/ProductList/ProductList";
import {data} from "../assets/data";

function Home() {
  // const [products,setProducts] = useState([])

  //useEffect(()=>{
  // axios('localhost')
  //}, [])

  return (
    <>
      <ProductList products={data} />
    </>
  );
}

export default Home;
