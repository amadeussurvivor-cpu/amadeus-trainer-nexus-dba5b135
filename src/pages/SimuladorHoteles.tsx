import SimuladorPage from "@/components/SimuladorPage";

const HOTMART_HOTELES_URL = "https://hotmart.com/es/marketplace"; // placeholder

const SimuladorHoteles = () => (
  <SimuladorPage
    module="hoteles"
    title="Simulador Amadeus – Módulo Hoteles"
    seoTitle="Simulador Amadeus Hoteles – Aprende reservas de hotel GDS | Amadeus Survivor"
    seoDescription="Simulador práctico de Amadeus para aprender a gestionar reservas de hotel. Practica búsqueda, tarifas, confirmación y modificaciones en un entorno seguro."
    seoKeywords="simulador amadeus hoteles, reserva hotel gds, comandos amadeus hotel, curso amadeus hoteles"
    description="Simulador práctico para aprender a gestionar reservas de hotel en Amadeus. Practica búsqueda de disponibilidad, selección de tarifas, confirmación y modificaciones en un entorno sandbox seguro."
    features={[
      "Terminal interactiva con comandos de hotel",
      "Búsqueda de disponibilidad por ciudad y fechas",
      "Visualización de tarifas y tipos de habitación",
      "Confirmación de reservas de hotel",
      "Modificación de fechas y tipos de habitación",
      "Cancelación de reservas con políticas",
      "Integración con PNR de vuelos",
      "Entorno sandbox sin riesgo",
    ]}
    missions={[
      "Buscar hoteles disponibles en Barcelona",
      "Comparar tarifas y tipos de habitación",
      "Confirmar una reserva de hotel",
      "Modificar las fechas de una reserva existente",
      "Cancelar una reserva de hotel",
    ]}
    hotmartUrl={HOTMART_HOTELES_URL}
    colorTheme="violet"
  />
);

export default SimuladorHoteles;
