import SimuladorPage from "@/components/SimuladorPage";
import logoVuelos from "@/assets/logo_vuelos.png";

const HOTMART_VUELOS_URL = "https://pay.hotmart.com/M104903692I";
const TRAINING_VUELOS_URL = "https://amadeussurvivor-vuelos.lovable.app";

const SimuladorVuelos = () => (
  <SimuladorPage
    module="vuelos"
    title="Amadeus Survivor – Módulo Vuelos"
    seoTitle="Simulador Amadeus Vuelos – Aprende a crear PNR de vuelos | Amadeus Survivor"
    seoDescription="Simulador práctico de Amadeus para aprender a crear PNR de vuelos. Practica comandos reales de disponibilidad, reserva y emisión en un entorno seguro."
    seoKeywords="simulador amadeus vuelos, pnr vuelos, comandos amadeus, reserva vuelos gds, curso amadeus vuelos"
    heroIntro={`Agencia en cuarentena.\n\nEntrena lo que necesitas para no bloquearte en el terminal:\ndisponibilidad, venta, PNR, datos de pasajero y emisión.\n\nAquí puedes fallar.\nEn el turno real no.`}
    description={`Este módulo es un simulador práctico para aprender a trabajar vuelos en Amadeus.\n\nNo es un vídeo.\nNo es un PDF.\nNo es teoría.\n\nEs un terminal simulado donde escribes comandos,\nves displays,\ny practicas como si estuvieras en una agencia real.\n\nPuedes equivocarte, repetir y volver a empezar\nsin usar el sistema real.`}
    features={[
      "Codificación de ciudades y compañías",
      "Disponibilidad de vuelos",
      "Venta de segmentos",
      "Creación de PNR",
      "Datos de pasajero",
      "Tiempo límite",
      "Tarificación",
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
    moduleContents={[
      "Manual maestro",
      "Chuleta rápida",
      "Prácticas guiadas",
      "Terminal simulado",
      "Entrenamiento antes de que se abran las líneas",
    ]}
    hotmartUrl={HOTMART_VUELOS_URL}
    colorTheme="green"
    heroImage={logoVuelos}
  />
);

export default SimuladorVuelos;
