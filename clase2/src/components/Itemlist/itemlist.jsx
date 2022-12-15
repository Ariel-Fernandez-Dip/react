import Item
 from "../item/Item";
const Itemlist = ({productlist}) => {
    return (
        <div>
          {productlist.map(product => <Item key={product.id} producto={product}/>)}  
        </div>
    );
}

export default Itemlist;
