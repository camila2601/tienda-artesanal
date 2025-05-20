import React from 'react';

const products = [
  {
    id: 1,
    name: "platos de arcilla",
    price: 150.000,
    img : "https://plus.unsplash.com/premium_photo-1679852311462-733ae167dbc3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdG8lMjBhcnRlc2FuYWx8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    name: "Bolsos artesanales",
    price: 80.000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqGi_tm6kxInsCLFRhnKx8DQJbYR6cIFZ3Q&s"
  },
  {
    id: 3,
    name: "collares artesanales",
    price: 50.000,
    img : "https://files.diarioportal.com/diarioportal/images/2023/09/WhatsApp-Image-2023-09-12-at-16.17.25-2-1024x766.jpeg"
  },
  {
    id: 4,
    name: " Tazas de cerámica",
    price: 30.000,
    img: "https://lescuentoque.com.co/wp-content/uploads/2018/09/JARROS-CORONA-1-min-683x1024.jpg"
  },
  {
    id: 5,
    name: "muñecos de tela",
    price: 40.000,
    img:"https://elmundoinfinito.com/wp-content/uploads/2017/09/producto-artesanal.jpg"
  },
  {
    id: 6,
    name: "mesa de madera",
    price: 200.000,
    weight: "130g",
    img: "data:image/jpeg;base64,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"
  },
  {
    id: 7,
    name: "Bolso artesanal",
    price: 100.000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSff7BIhkNq1S16sye3Haj3IW3YC7LubLvWWQ&s"
  },
  {
    id: 8,
    name: "canastas tejidas",
    price: 6.00,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIg1DWhuXXFxfmVm5l0UjXo4WvqnxDT-RxQ&s"
  }
];

function ProductsPage() {
  return (
    <div className="container py-4">
      {/* Hero Section */}
      <div className="hero-section mb-5 d-flex align-items-center">
        <div className="hero-content">
          <h2 className="mb-2">MARKEPLACE ARTESANAL</h2>
          <p className='mb-4'>
            Tienda dedicada a la venta de productos artesanales. Compra directo a los artesanos, apoya el comercio local y descubre productos únicos.
          </p>
          <button className="shop-btn">Ver carrito</button>
        </div>
        
      </div>


      {/* Productos */}
      <div className="section-title">PRODUCTOS DESTACADOS</div>
      <div className="row">
        {products.map(prod => (
          <div className="col-md-3" key={prod.id}>
            <div className="product-card text-center">
              <img src={prod.img} alt={prod.name} className="product-img" />
              <div className="product-price">${prod.price.toFixed(2)}</div>
              <div className="product-weight">{prod.weight}</div>
              <div className="fw-bold mb-2">{prod.name}</div>
              <button className="add-btn">Agregar</button>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-btn">Ver todos</button>
    </div>
  );
}

export default ProductsPage;