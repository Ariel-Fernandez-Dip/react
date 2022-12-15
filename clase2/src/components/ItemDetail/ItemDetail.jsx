import Itemcount from "../ItemCount/ItemCount.jsx";

const ItemDetail = ({item}) => {
    console.log(item)
    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`../img/${item.img}`} alt="" className="img-fluid rounder-start"/>
            </div>
            <div className="col-md-8">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">Modelo: {item.modelo}</p>
                <p className="card-text">marca: {item.marca}</p>
                <p className="card-text">Precio: {item.precio}</p>
                <p className="card-text">Stock: {item.stock}</p>
                <Itemcount stock = {item.stock}/>
                <button className="btn btn-secondary">Finalizar compra</button>
            </div>

            
        </div>
    );
}

export default ItemDetail;
