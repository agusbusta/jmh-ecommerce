import { useState } from 'react';

const AddressesPanel = () => {
  const [addresses, setAddresses] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    street: '',
    number: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const handleAddAddress = (e) => {
    e.preventDefault();
    setAddresses([...addresses, { ...newAddress, id: Date.now() }]);
    setNewAddress({ street: '', number: '', city: '', state: '', zipCode: '' });
    setShowAddForm(false);
  };

  return (
    <div className="panel">
      <h2>Mis Direcciones</h2>
      <button 
        className="add-address-button"
        onClick={() => setShowAddForm(true)}
      >
        Agregar Nueva Dirección
      </button>

      {showAddForm && (
        <form onSubmit={handleAddAddress} className="address-form">
          <div className="form-group">
            <label htmlFor="street">Calle</label>
            <input
              type="text"
              id="street"
              value={newAddress.street}
              onChange={(e) => setNewAddress({...newAddress, street: e.target.value})}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="number">Número</label>
              <input
                type="text"
                id="number"
                value={newAddress.number}
                onChange={(e) => setNewAddress({...newAddress, number: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Código Postal</label>
              <input
                type="text"
                id="zipCode"
                value={newAddress.zipCode}
                onChange={(e) => setNewAddress({...newAddress, zipCode: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="city">Ciudad</label>
            <input
              type="text"
              id="city"
              value={newAddress.city}
              onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">Provincia</label>
            <input
              type="text"
              id="state"
              value={newAddress.state}
              onChange={(e) => setNewAddress({...newAddress, state: e.target.value})}
              required
            />
          </div>
          <div className="button-group">
            <button type="submit">Guardar</button>
            <button type="button" onClick={() => setShowAddForm(false)}>
              Cancelar
            </button>
          </div>
        </form>
      )}

      <div className="addresses-list">
        {addresses.map(address => (
          <div key={address.id} className="address-card">
            <p>{address.street} {address.number}</p>
            <p>{address.city}, {address.state}</p>
            <p>CP: {address.zipCode}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressesPanel; 