import { useState, useEffect} from "react";
import Itemlist from "../Itemlist/itemlist";
import consultarBDD from '../../assets/funciones.js'
import Item from "../item/Item";
import { useParams } from "react-router-dom";

const Itemlistcontainer = ({}) => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams()
    useEffect(() => {
        if(category) {
            consultarBDD('../json/productos.json').then(productsList => {
                const cardProductos = Itemlist({productsList})
                setProductos(cardProductos)
            })
        } else {
            consultarBDD('./json/productos.json').then(productsList => {
                const cardProductos = Itemlist({productsList})
                setProductos(cardProductos)
            })
        }
        
    
},[category]);

    return (
        <>
           <div className="row cardProductos">
                {productos}
           </div>
        </>
    );
}

export default Itemlistcontainer;


