import { useRouter } from 'next/router';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function PatientPage() {
  const { query } = useRouter();
  const { data, error } = useSWR(query.id ? `/api/patient/${query.id}` : null, fetcher);

  if (error) return <div>Error loading data.</div>;
  if (!data) return <div>Loading...</div>;

  const { patient, observations, encounter } = data;

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-2">Patient: {patient.name?.[0]?.text || patient.id}</h1>
      <p><strong>Gender:</strong> {patient.gender}</p>
      <p><strong>Birthdate:</strong> {patient.birthDate}</p>

      <h2 className="text-lg font-semibold mt-4">Recent Observations</h2>
      <ul className="list-disc pl-6">
        {observations.map((entry: any, idx: number) => (
          <li key={idx}>
            {entry.resource.code?.text}: {entry.resource.valueQuantity?.value} {entry.resource.valueQuantity?.unit}
          </li>
        ))}
      </ul>

      {encounter && (
        <>
          <h2 className="text-lg font-semibold mt-4">Last Encounter</h2>
          <p><strong>Type:</strong> {encounter.type?.[0]?.text}</p>
          <p><strong>Start:</strong> {encounter.period?.start}</p>
        </>
      )}
    </div>
  );
}
