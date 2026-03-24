import SimuladorPage from "@/components/SimuladorPage";

const HOTMART_COCHES_URL = "https://hotmart.com/es/marketplace"; // placeholder

const SimuladorCoches = () => (
  <SimuladorPage
    module="coches"
    title="Simulador Amadeus – Módulo Coches"
    seoTitle="Simulador Amadeus Coches – Aprende reservas de coches GDS | Amadeus Survivor"
    seoDescription="Simulador práctico de Amadeus para aprender a gestionar reservas de coches. Practica búsqueda, categorías, tarifas y confirmación en un entorno seguro."
    seoKeywords="simulador amadeus coches, reserva coches gds, rent a car amadeus, curso amadeus coches"
    description="Simulador práctico para aprender a gestionar reservas de coches en Amadeus. Practica búsqueda de disponibilidad, categorías, tarifas y confirmación en un entorno sandbox seguro."
    features={[
      "Terminal interactiva con comandos de coches",
      "Búsqueda de disponibilidad por ciudad y fechas",
      "Visualización de categorías de vehículos",
      "Comparación de tarifas entre compañías",
      "Confirmación de reservas de coche",
      "Modificación de fechas y categorías",
      "Cancelación de reservas",
      "Entorno sandbox sin riesgo",
    ]}
    missions={[
      "Buscar coches disponibles en Madrid",
      "Comparar categorías y tarifas",
      "Confirmar una reserva de coche",
      "Modificar una reserva existente",
      "Cancelar una reserva de coche",
    ]}
    hotmartUrl={HOTMART_COCHES_URL}
  />
);

export default SimuladorCoches;
