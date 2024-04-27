import { useState, useEffect } from "react";
const useFetch = (url,method = "GET") => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // const postData = ()={

  // }

  useEffect(() => {
    const fetchItems = async () => {
      setIsPending(true);
      try {
        const res = await fetch(url);
        console.log(res)
        if(!res.ok){
          throw new Error(res.statusText)
        }
        const json = await res.json();
        setData(json);
        setIsPending(false);
        setError(null)
      } catch (err) {
        setIsPending(false);
        setError(`Couldn't Fetch the data`)
        console.log(err.message);
      }
    };
    fetchItems();
    console.log(data);
  }, [url]);

  return { data, isPending,error };
};

export default useFetch;
