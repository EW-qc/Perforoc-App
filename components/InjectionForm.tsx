import React, { useState } from 'react';

const InjectionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    injectionType: '',
    pressure: '',
    volume: '',
    date: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Injection Form Data Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-bold">Injection Form</h2>
      <label className="block">
        Injection Type:
        <input type="text" name="injectionType" value={formData.injectionType} onChange={handleChange} className="border p-2 rounded w-full"/>
      </label>
      <label className="block">
        Pressure (KPA):
        <input type="number" name="pressure" value={formData.pressure} onChange={handleChange} className="border p-2 rounded w-full"/>
      </label>
      <label className="block">
        Volume (L):
        <input type="number" name="volume" value={formData.volume} onChange={handleChange} className="border p-2 rounded w-full"/>
      </label>
      <label className="block">
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="border p-2 rounded w-full"/>
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default InjectionForm;
