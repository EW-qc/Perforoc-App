import React, { useState } from 'react';

const ForageForm: React.FC = () => {
  const [formData, setFormData] = useState({
    project: '',
    date: '',
    holeDepth: '',
    comments: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Forage Form Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-bold">Forage Form</h2>
      <label className="block">
        Project:
        <input type="text" name="project" value={formData.project} onChange={handleChange} className="border p-2 rounded w-full"/>
      </label>
      <label className="block">
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="border p-2 rounded w-full"/>
      </label>
      <label className="block">
        Hole Depth:
        <input type="text" name="holeDepth" value={formData.holeDepth} onChange={handleChange} className="border p-2 rounded w-full"/>
      </label>
      <label className="block">
        Comments:
        <input type="text" name="comments" value={formData.comments} onChange={handleChange} className="border p-2 rounded w-full"/>
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default ForageForm;
