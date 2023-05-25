import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../../public/menu.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return { data };
};

export default useFetch;
