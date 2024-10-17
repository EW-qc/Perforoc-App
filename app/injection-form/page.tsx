"use client";

import React, { useState } from "react";

const InjectionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fieldA: "",
    fieldB: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <header className="w-full py-6 bg-blue-600 text-center">
        <h1 className="text-4xl font-bold">Injection Form</h1>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow text-center space-y-6 mt-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-left mb-2">Field A</label>
            <input
              type="text"
              name="fieldA"
              value={formData.fieldA}
              onChange={handleInputChange}
              className="w-full p-2 text-gray-900 rounded"
            />
          </div>
          <div>
            <label className="block text-left mb-2">Field B</label>
            <input
              type="text"
              name="fieldB"
              value={formData.fieldB}
              onChange={handleInputChange}
              className="w-full p-2 text-gray-900 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
          >
            Submit
          </button>
        </form>
      </main>

      <footer className="w-full py-4 bg-gray-800 text-center">
        <p className="text-sm text-gray-400">© 2024 Perforoc Project Management</p>
      </footer>
    </div>
  );
};

export default InjectionForm;
