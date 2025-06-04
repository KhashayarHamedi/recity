import { useEffect, useState } from 'react'

interface SimData {
  location: string
  crowd_level: string
  foot_traffic: number
  noise_level_db: number
  air_quality_index: number
}

function App() {
  const [data, setData] = useState<SimData | null>(null)

  useEffect(() => {
    fetch('http://localhost:8000/simulate')
      .then(res => res.json())
      .then(setData)
      .catch(() => setData(null))
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">🧠 Re:City Simulation</h1>
      {data ? (
        <div className="bg-white p-6 rounded-2xl shadow-lg text-left w-full max-w-md">
          <p><strong>📍 Location:</strong> {data.location}</p>
          <p><strong>👥 Crowd Level:</strong> {data.crowd_level}</p>
          <p><strong>🚶 Foot Traffic:</strong> {data.foot_traffic}</p>
          <p><strong>🔊 Noise Level (dB):</strong> {data.noise_level_db}</p>
          <p><strong>🌿 Air Quality Index:</strong> {data.air_quality_index}</p>
        </div>
      ) : (
        <p className="text-red-500">Loading data or backend offline.</p>
      )}
    </div>
  )
}

export default App
