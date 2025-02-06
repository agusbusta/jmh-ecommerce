import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5491152630404', '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleWhatsAppClick} aria-label="Contactar por WhatsApp">
      <img src="/images/whatsapp.png" alt="WhatsApp" />
    </button>
  );
};

export default WhatsAppButton; 