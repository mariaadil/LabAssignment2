import React, { useState } from 'react';

const MyFormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Add more form fields as needed
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Your React Form</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        {/* Add more form fields as needed */}
      </form>
    </div>
  );
};

export default MyFormComponent;