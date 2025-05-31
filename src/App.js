

/*import Form from "./Form";
function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
*/



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    thirdName: '',
    gender: '',
    language: '',
  });

  const [errors, setErrors] = useState({});

  const languageOptions = ['English', 'Spanish', 'French', 'German'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 3) {
      newErrors.firstName = 'First name must be at least 3 characters';
    }

    if (!formData.secondName.trim()) {
      newErrors.secondName = 'Second name is required';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select your gender';
    }

    if (!formData.language) {
      newErrors.language = 'Please select a language';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');

      // Reset form
      setFormData({
        firstName: '',
        secondName: '',
        thirdName: '',
        gender: '',
        language: '',
      });

      setErrors({});
    }
  };

  return (
    <div className="container mt-5">
      <h2>Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* First Name */ }
        
        <div className="mb-3">
          <label className="form-label">First Name *</label>
          <input
            type="text"
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
        </div>

        {/* Second Name */ }
        
        <div className="mb-3">
          <label className="form-label">Second Name *</label>
          <input
            type="text"
            className={`form-control ${errors.secondName ? 'is-invalid' : ''}`}
            name="secondName"
            value={formData.secondName}
            onChange={handleChange}
          />
          {errors.secondName && <div className="invalid-feedback">{errors.secondName}</div>}
        </div>

        {/* Third Name (Optional) */ }
      
        <div className="mb-3">
          <label className="form-label">Third Name</label>
          <input
            type="text"
            className="form-control"
            name="thirdName"
            value={formData.thirdName}
            onChange={handleChange}
          />
        </div>

        {/* Gender */ }
        
        <div className="mb-3">
          <label className="form-label">Gender *</label>
          <select
            className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
        </div>

        {/* Language */ }
        
        <div className="mb-3">
          <label className="form-label">Language *</label>
          <select
            className={`form-select ${errors.language ? 'is-invalid' : ''}`}
            name="language"
            value={formData.language}
            onChange={handleChange}
          >
            <option value="">Select Language</option>
            {languageOptions.map((lang, index) => (
              <option key={index} value={lang}>
                {lang}
              </option>
            ))}
          </select>
          {errors.language && <div className="invalid-feedback">{errors.language}</div>}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default App;

