import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5491152630404', '_blank');
  };

  return (
      <img src={process.env.PUBLIC_URL + '/images/whatsapp.png'} alt="WhatsApp" onClick={handleWhatsAppClick}  className="whatsapp-button" />

  );
};

export default WhatsAppButton; 