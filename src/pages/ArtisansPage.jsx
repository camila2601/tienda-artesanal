import React from "react";

const artisans = [
  {
    name: "Manos de Oro",
    location: "Boyacá, Colombia",
    specialty: "Cerámica artesanal",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80"
  },
  {
    name: "Tejiendo Sueños",
    location: "Oaxaca, México",
    specialty: "Textiles y tapices",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=256&q=80"
  },
  {
    name: "Arte en Madera",
    location: "Cusco, Perú",
    specialty: "Tallado en madera",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=256&q=80"
  },
  {
    name: "Colores del Sur",
    location: "Salta, Argentina",
    specialty: "Pintura y arte decorativo",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&q=80"
  },
  {
    name: "Cestería Ancestral",
    location: "Nariño, Colombia",
    specialty: "Cestería y fibras naturales",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=256&q=80"
  },
  {
    name: "Joyas del Lago",
    location: "Puno, Perú",
    specialty: "Joyería artesanal",
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&q=80"
  },
  {
    name: "Barro y Fuego",
    location: "Talavera, España",
    specialty: "Alfarería y cerámica",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&q=80"
  },
  {
    name: "Raíces Artesanas",
    location: "Quito, Ecuador",
    specialty: "Escultura y máscaras",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=256&q=80"
  },
  {
    name: "Sueños de Lana",
    location: "La Paz, Bolivia",
    specialty: "Tejidos de lana",
    img: "https://images.unsplash.com/photo-1519340333755-c6e2a6a1b49a?auto=format&fit=facearea&w=256&q=80"
  },
  {
    name: "Arte y Vida",
    location: "Montevideo, Uruguay",
    specialty: "Arte en cuero",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=256&q=80"
  }
];

function ArtisansPage() {
  return (
    <div className="artisans-container">
      <h2 className="artisans-title">Nuestros Artesanos</h2>
      <div className="artisans-list">
        {artisans.map((art, idx) => (
          <div className="artisan-card" key={idx}>
            <img src={art.img} alt={art.name} className="artisan-img" />
            <div className="artisan-info">
              <h3 className="artisan-name">{art.name}</h3>
              <p className="artisan-specialty">{art.specialty}</p>
              <p className="artisan-location">{art.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtisansPage;