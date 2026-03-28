import SimuladorPage from "@/components/SimuladorPage";
import logoCoches from "@/assets/logo_coches_module.png";

const HOTMART_COCHES_URL = "https://hotmart.com/es/marketplace"; // placeholder

const SimuladorCoches = () => (
  <SimuladorPage
    module="coches"
    title="Amadeus Survivor – Módulo Coches"
    seoTitle="Simulador Amadeus Coches – Aprende reservas de coches GDS | Amadeus Survivor"
    seoDescription="Simulador práctico de Amadeus para aprender a gestionar reservas de coches. Practica búsqueda, categorías, tarifas y confirmación en un entorno seguro."
    seoKeywords="simulador amadeus coches, reserva coches gds, rent a car amadeus, curso amadeus coches"
    heroIntro={`Nochevieja. Sin trenes.\n\nAlquilar un coche es la última esperanza.\n\nMás vale que sepas usar el sistema.`}
    description={`Este módulo es un simulador práctico para aprender a gestionar reservas de coches en Amadeus.\n\nNo es un vídeo.\nNo es un PDF.\nNo es teoría.\n\nEs un terminal simulado donde escribes comandos,\nves displays,\ny practicas como si estuvieras en una agencia real.\n\nPuedes equivocarte, repetir y volver a empezar\nsin usar el sistema real.`}
    features={[
      "Entender seguros, franquicias y condiciones reales",
      "Buscar información y disponibilidad de coches",
      "Interpretar el sistema ACRISS (tipos de vehículos)",
      "Gestionar tarifas y extras sin liarte",
      "Visualizar, enviar y gestionar reservas",
      "Cerrar la reserva y emitir",
      "Modificar reservas y resolver incidencias sin entrar en pánico",
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
      "Entrenamiento antes de atender clientes reales",
    ]}
    hotmartUrl={HOTMART_COCHES_URL}
    colorTheme="blue"
    heroImage={logoCoches}
  />
);

export default SimuladorCoches;
