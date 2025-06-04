// src/app/api/patient/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getGoogleAuthClient } from '@/lib/googleClient';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'Patient ID is required' }, { status: 400 });
  }

  try {
    const client = getGoogleAuthClient();
    const accessToken = await client.getAccessToken();

    const baseUrl = `https://healthcare.googleapis.com/v1/${process.env.FHIR_STORE_NAME}`;

    const [patient, observations, encounters] = await Promise.all([
      axios.get(`${baseUrl}/fhir/Patient/${id}`, {
        headers: { Authorization: `Bearer ${accessToken.token}` },
      }),
      axios.get(`${baseUrl}/fhir/Observation?subject=Patient/${id}&_count=5&_sort=-date`, {
        headers: { Authorization: `Bearer ${accessToken.token}` },
      }),
      axios.get(`${baseUrl}/fhir/Encounter?subject=Patient/${id}&_count=1&_sort=-date`, {
        headers: { Authorization: `Bearer ${accessToken.token}` },
      }),
    ]);
    console.log('Fetching patient:', id);

    return NextResponse.json({
      patient: patient.data,
      observations: observations.data.entry || [],
      encounter: encounters.data.entry?.[0]?.resource || null,
    });
  } catch (err: any) {
    console.error(err.message);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
