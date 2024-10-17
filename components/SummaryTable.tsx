import React from 'react';

const SummaryTable: React.FC = () => {
  const data = [
    { id: 1, project: 'Project A', status: 'Completed', date: '2024-10-10' },
    { id: 2, project: 'Project B', status: 'In Progress', date: '2024-10-15' }
  ];

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Project</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="bg-gray-100">
            <td className="border px-4 py-2">{row.project}</td>
            <td className="border px-4 py-2">{row.status}</td>
            <td className="border px-4 py-2">{row.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SummaryTable;
