const WhatsAppButton = () => {
  const phoneNumber = "5491152630404"; // Número de WhatsApp de la empresa
  const message = "Hola, me gustaría recibir más información sobre sus productos.";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button 
      className="whatsapp-button"
      onClick={handleClick}
      aria-label="Contactar por WhatsApp"
    >
      <img src="/whatsapp-icon.svg" alt="WhatsApp" />
    </button>
  );
};

export default WhatsAppButton; 