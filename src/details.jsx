import { useProductContext } from "./ProductContext";

const ItemDetails=()=>{
    const { selectedProduct } = useProductContext();
    return( 
     <div>
      <img src={selectedProduct.image} alt={selectedProduct.title} style={{height:112,width:130}}/>
        <p>{selectedProduct.description}</p>
        <h4>{selectedProduct.price}</h4>
    </div>
    )}
    export default ItemDetails