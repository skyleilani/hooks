import { useState, useEffect } from 'react';

 //a simple custom hook that fetches data from an API and stores it in a state variable
 
const useFetchData = (url: string) => {
 
 //initialize state variables for data, loading, and error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //fetch data on url change
  useEffect(() => {
   
   // fetchData is an async function to fetch data 
    const fetchData = async () => {
      try {
       //make api request
        const response = await fetch(url);
        
        //parse response as JSON
        const data = await response.json();
        
        //update the data state with parsed response
        setData(data);
      } catch (err) {
       
       //set error state if there is an error
        setError(err);
      } finally {
       
       // set loading state to false
        setLoading(false);
      }
    }
    
    // call fetchData to initiate API request
    fetchData();
  }, [url]); // only refetch data when url changes

  return { data, loading, error }
};

export default useFetchData;
