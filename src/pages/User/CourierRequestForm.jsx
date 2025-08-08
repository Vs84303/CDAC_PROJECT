import React, { useState } from 'react';
import api from '../../api/api'; // Axios instance with auth

const CourierRequestForm = () => {
  const [pickupAddress, setPickupAddress] = useState({
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    additionalInfo: '',
  });

  const [deliveryAddress, setDeliveryAddress] = useState({
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    additionalInfo: '',
  });

  const [packageDetails, setPackageDetails] = useState({
    weight: '',
    dimensions: '',
    description: '',
  });

  const [message, setMessage] = useState('');

  const handlePickupChange = e => {
    setPickupAddress({ ...pickupAddress, [e.target.name]: e.target.value });
  };

  const handleDeliveryChange = e => {
    setDeliveryAddress({ ...deliveryAddress, [e.target.name]: e.target.value });
  };

  const handlePackageChange = e => {
    setPackageDetails({ ...packageDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const requestBody = {
      pickupAddress, 
      deliveryAddress,
      packageDetails,
    };

    try {
      // Replace '/shipments' with your actual API route for courier requests
      const response = await api.post('/shipments', requestBody);
      setMessage('Courier request submitted successfully!');
      // Optionally clear form fields
      setPickupAddress({
        street: '', city: '', state: '', postalCode: '', country: '', additionalInfo: ''
      });
      setDeliveryAddress({
        street: '', city: '', state: '', postalCode: '', country: '', additionalInfo: ''
      });
      setPackageDetails({ weight: '', dimensions: '', description: '' });
    } catch (error) {
      setMessage('Error submitting courier request. Please try again.');
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '30px auto' }}>
      <h2>New Courier Request</h2>
      <form onSubmit={handleSubmit}>

        <h3>Pickup Address</h3>
        <input name="street" placeholder="Street" value={pickupAddress.street} onChange={handlePickupChange} required />
        <input name="city" placeholder="City" value={pickupAddress.city} onChange={handlePickupChange} required />
        <input name="state" placeholder="State" value={pickupAddress.state} onChange={handlePickupChange} required />
        <input name="postalCode" placeholder="Postal Code" value={pickupAddress.postalCode} onChange={handlePickupChange} required />
        <input name="country" placeholder="Country" value={pickupAddress.country} onChange={handlePickupChange} required />
        <input name="additionalInfo" placeholder="Additional Info" value={pickupAddress.additionalInfo} onChange={handlePickupChange} />

        <h3>Delivery Address</h3>
        <input name="street" placeholder="Street" value={deliveryAddress.street} onChange={handleDeliveryChange} required />
        <input name="city" placeholder="City" value={deliveryAddress.city} onChange={handleDeliveryChange} required />
        <input name="state" placeholder="State" value={deliveryAddress.state} onChange={handleDeliveryChange} required />
        <input name="postalCode" placeholder="Postal Code" value={deliveryAddress.postalCode} onChange={handleDeliveryChange} required />
        <input name="country" placeholder="Country" value={deliveryAddress.country} onChange={handleDeliveryChange} required />
        <input name="additionalInfo" placeholder="Additional Info" value={deliveryAddress.additionalInfo} onChange={handleDeliveryChange} />

        <h3>Package Details</h3>
        <input name="weight" placeholder="Weight (kg)" value={packageDetails.weight} onChange={handlePackageChange} required />
        <input name="dimensions" placeholder="Dimensions (L x W x H cm)" value={packageDetails.dimensions} onChange={handlePackageChange} />
        <textarea name="description" placeholder="Description" value={packageDetails.description} onChange={handlePackageChange} />

        <button type="submit" style={{ marginTop: 20 }}>Submit Request</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CourierRequestForm;
