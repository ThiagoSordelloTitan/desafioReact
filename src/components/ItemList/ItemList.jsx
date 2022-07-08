import React, { useState, useEffect } from 'react'

const ItemList = () => {

    const [data, setData] = useState([]);
    const [filtro, setFiltro] = useState(data);
    const [cargando, setCargando] = useState(false);

    let componenteMontado = true;

    useEffect(() => {
        const getItemList = async () => {
            setCargando(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componenteMontado) {
                setData(await response.clone().json());
                setFiltro(await response.json());
                setCargando(false);
                console.log(filtro)
            }
            return () => {
                componenteMontado = false;
            }
        }
        getItemList();
    }, [])

    const Cargando = () => {
        return (
            <>
                Cargando productos...
            </>
        )
    }

    const MostrarProductos = () => {
        return (
            <>
                <div className="botones d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2">Todo</button>
                    <button className="btn btn-outline-dark me-2">Ropa Hombres</button>
                    <button className="btn btn-outline-dark me-2">Ropa Mujeres</button>
                    <button className="btn btn-outline-dark me-2">Joyería</button>
                    <button className="btn btn-outline-dark me-2">Electrónica</button>
                </div>
                {filtro.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4 mb-2" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="300px"/>
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{product.title.substring(0,12)}</h5>
                                            <p class="card-text">${product.price}</p>
                                            <a href="/" class="btn btn-outline-dark">Comprar</a>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }


    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 text-center fw-bolder'>Ultimas adquisiciones</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {cargando ? <Cargando /> : <MostrarProductos />}
                </div>
            </div>
        </div>
    )
}

export default ItemList