import SimuladorPage from "@/components/SimuladorPage";

const HOTMART_HOTELES_URL = "https://hotmart.com/es/marketplace"; // placeholder

const SimuladorHoteles = () => (
  <SimuladorPage
    module="hoteles"
    title="Amadeus Survivor – Módulo Hoteles"
    seoTitle="Simulador Amadeus Hoteles – Aprende reservas de hotel GDS | Amadeus Survivor"
    seoDescription="Simulador práctico de Amadeus para aprender a gestionar reservas de hotel. Practica búsqueda, tarifas, confirmación y modificaciones en un entorno seguro."
    seoKeywords="simulador amadeus hoteles, reserva hotel gds, comandos amadeus hotel, curso amadeus hoteles"
    heroIntro={`Vuelos cancelados. Pasajeros sin hotel.\n\nEntrena lo que necesitas para reaccionar rápido:\ncodificación, disponibilidad, tarifas y reserva.\n\nAquí puedes probar.\nCon el mostrador lleno, no.`}
    description={`Este módulo es un simulador práctico para aprender a gestionar reservas de hotel en Amadeus.\n\nNo es un vídeo.\nNo es un PDF.\nNo es teoría.\n\nEs un terminal simulado donde escribes comandos,\nves displays,\ny practicas como si estuvieras en una agencia real.\n\nPuedes equivocarte, repetir y volver a empezar\nsin usar el sistema real.`}
    features={[
      "Codificación de ciudades y cadenas hoteleras",
      "Búsqueda de disponibilidad por ciudad y fechas",
      "Visualización de tarifas y tipos de habitación",
      "Confirmación de reservas de hotel",
      "Modificación de fechas y tipos de habitación",
      "Cancelación de reservas con políticas",
      "Integración con PNR de vuelos",
      "Cierre de reserva",
    ]}
    howItWorks={[
      "El simulador funciona como un terminal",
      "Escribes comandos y recibes respuestas",
      "Avanzas siguiendo ejercicios guiados",
      "Cada misión reproduce situaciones reales de agencia",
      "Puedes practicar las veces que quieras",
    ]}
    audiences={[
      "Estudiantes de turismo",
      "Agentes nuevos",
      "Personas sin acceso al sistema real",
      "Formación interna",
      "Cambio de sector",
    ]}
    includes={[
      "Acceso online",
      "Uso recomendado en ordenador",
      "Acceso durante 6 meses",
      "Código enviado por email",
      "Entorno no oficial",
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