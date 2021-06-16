import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (
  url,
  options = { skip: false, dependencies: [], parser: (data) => data }
) => {
  const { skip, dependencies, parser } = options;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    if (!skip) {
      setLoading(true);
      setData(null);
      setError(null);
      axios
        .get(url, { cancelToken: source.token })
        .then((res) => {
          setLoading(false);
          res.data && setData(parser(res.data));
        })
        .catch((err) => {
          setLoading(false);
          setError("An error occurred");
        });
    }
    return () => {
      source.cancel();
    };
  }, dependencies);

  return { data, loading, error };
};

export default useFetch;
