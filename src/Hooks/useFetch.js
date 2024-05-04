import { useState, useEffect } from "react";

const useFetch = (url, method = "GET") => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  const postData = (postData) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };

  useEffect(() => {
    const controller = new AbortController();
    const fetchItems = async (fetchOptions) => {
      setIsPending(true);
      try {
        const res = await fetch(url, {...fetchOptions, signal: controller.signal });
        console.log(res);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setData(json);
        setIsPending(false);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError(`Couldn't Fetch the data`);
        console.log(err.message);
      }
    };

    if (method === "GET") {
      fetchItems();
    }
    if (method === "POST" && options) {
      fetchItems(options);
    }

    console.log(data);
  }, [url,options,method]);

  return { data, isPending, error, postData };
};

export default useFetch;
