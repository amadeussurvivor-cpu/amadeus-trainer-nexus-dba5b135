import SimuladorPage from "@/components/SimuladorPage";

const HOTMART_COCHES_URL = "https://hotmart.com/es/marketplace"; // placeholder

const SimuladorCoches = () => (
  <SimuladorPage
    module="coches"
    title="Amadeus Survivor – Módulo Coches"
    seoTitle="Simulador Amadeus Coches – Aprende reservas de coches GDS | Amadeus Survivor"
    seoDescription="Simulador práctico de Amadeus para aprender a gestionar reservas de coches. Practica búsqueda, categorías, tarifas y confirmación en un entorno seguro."
    seoKeywords="simulador amadeus coches, reserva coches gds, rent a car amadeus, curso amadeus coches"
    heroIntro={`Nochevieja. Los trenes no funcionan y todo el mundo pide coche.\n\nEntrena lo que necesitas para responder rápido:\ncodificación, disponibilidad, categorías, tarifas y reserva.\n\nAquí puedes probar.\nEn el turno real no hay tiempo.`}
    description={`Este módulo es un simulador práctico para aprender a gestionar reservas de coches en Amadeus.\n\nNo es un vídeo.\nNo es un PDF.\nNo es teoría.\n\nEs un terminal simulado donde escribes comandos,\nves displays,\ny practicas como si estuvieras en una agencia real.\n\nPuedes equivocarte, repetir y volver a empezar\nsin usar el sistema real.`}
    features={[
      "Codificación de ciudades y compañías de alquiler",
      "Búsqueda de disponibilidad por ciudad y fechas",
      "Categorías de vehículos",
      "Comparación de tarifas entre compañías",
      "Confirmación de reservas de coche",
      "Modificación de fechas y categorías",
      "Cancelación de reservas",
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
      "Buscar coches disponibles en Madrid",
      "Comparar categorías y tarifas",
      "Confirmar una reserva de coche",
      "Modificar una reserva existente",
      "Cancelar una reserva de coche",
    ]}
    hotmartUrl={HOTMART_COCHES_URL}
    colorTheme="blue"
  />
);

export default SimuladorCoches;