import * as React from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "0c5a99391fmshba31ce56629a9d7p11f911jsna09a2e210410",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {
    data,
    isLoading,
    error,
    reFetch,
  };
};

export default useFetch;
