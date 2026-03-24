import SimuladorPage from "@/components/SimuladorPage";

const HOTMART_VUELOS_URL = "https://hotmart.com/es/marketplace"; // placeholder

const SimuladorVuelos = () => (
  <SimuladorPage
    module="vuelos"
    title="Simulador Amadeus – Módulo Vuelos"
    seoTitle="Simulador Amadeus Vuelos – Aprende a crear PNR de vuelos | Amadeus Survivor"
    seoDescription="Simulador práctico de Amadeus para aprender a crear PNR de vuelos. Practica comandos reales de disponibilidad, reserva y emisión en un entorno seguro."
    seoKeywords="simulador amadeus vuelos, pnr vuelos, comandos amadeus, reserva vuelos gds, curso amadeus vuelos"
    description="Simulador práctico para aprender a crear un PNR básico de vuelos en Amadeus. Practica disponibilidad, reserva, datos de pasajero y emisión con comandos reales en un entorno sandbox seguro."
    features={[
      "Terminal interactiva con comandos reales de Amadeus",
      "Creación de PNR paso a paso",
      "Búsqueda de disponibilidad de vuelos (AN)",
      "Selección de vuelos y clases de reserva (SS)",
      "Introducción de datos de pasajero (NM, AP, TK)",
      "Práctica de emisión de billetes",
      "Modificación y cancelación de reservas",
      "Entorno sandbox sin riesgo",
    ]}
    missions={[
      "Buscar disponibilidad Madrid-Barcelona",
      "Crear un PNR básico con un pasajero",
      "Añadir datos de contacto y límite de emisión",
      "Modificar una reserva existente",
      "Cancelar segmentos de un PNR",
    ]}
    hotmartUrl={HOTMART_VUELOS_URL}
  />
);

export default SimuladorVuelos;
