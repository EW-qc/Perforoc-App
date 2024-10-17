"use client";

import React from "react";

const SummaryTable: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <header className="w-full py-6 bg-blue-600 text-center">
        <h1 className="text-4xl font-bold">Summary Table</h1>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow text-center space-y-6 mt-8">
        <table className="w-full text-left table-auto border-collapse border border-gray-700">
          <thead>
            <tr>
              <th className="border border-gray-700 p-2">Column 1</th>
              <th className="border border-gray-700 p-2">Column 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-700 p-2">Data 1</td>
              <td className="border border-gray-700 p-2">Data 2</td>
            </tr>
            <tr>
              <td className="border border-gray-700 p-2">Data 3</td>
              <td className="border border-gray-700 p-2">Data 4</td>
            </tr>
          </tbody>
        </table>
      </main>

      <footer className="w-full py-4 bg-gray-800 text-center">
        <p className="text-sm text-gray-400">© 2024 Perforoc Project Management</p>
      </footer>
    </div>
  );
};

export default SummaryTable;
