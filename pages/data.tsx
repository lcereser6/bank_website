// pages/data.tsx
import { useEffect, useState } from 'react';

type DataType = {
  id: number;
  name : string;
  desscription : string;
};

const DataPage: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getData');
        const result: DataType[] = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Data from PostgreSQL</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id}
            {/* Display other fields here, e.g., {item.name}, {item.age} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataPage;
