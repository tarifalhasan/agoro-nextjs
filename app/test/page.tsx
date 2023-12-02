import { useEffect, useState } from "react";

const fetchData = async () => {
  try {
    const response = await fetch("YOUR_API_ENDPOINT");
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const YourComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      {/* Render your fetched data */}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default YourComponent;
