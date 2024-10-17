import React from 'react';

const SubmitForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submit button clicked');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-bold">Submit Data</h2>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit All Data</button>
    </form>
  );
};

export default SubmitForm;
