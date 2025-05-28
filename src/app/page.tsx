import { useRouter } from 'next/navigation';
import { useState } from 'react';
import React from 'react';

// This is the main page where users can enter a Patient ID to view their snapshot
export default function Home() {
  const router = useRouter();
  const [patientId, setPatientId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (patientId.trim()) {
      router.push(`/patient/${patientId}`);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Patient Snapshot Viewer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Search
        </button>
      </form>
    </div>
  );
}

