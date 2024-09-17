import useSWR from "swr";
import { useRouter } from "next/router";

export default function ProductList() {
  const router = useRouter();
  const { id } = router.query;
  const fetcher = async (url) => {
    const response = await fetch(url);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the data.");
      // Attach extra info to the error object.
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return response.json();
  };

  const { data, isLoading, error } = useSWR(
    id ? `/api/products/${id}` : null,
    fetcher
  );

  if (isLoading) {
    return <h1>Loading data...</h1>;
  }

  if (!data) {
    return;
  }

  console.log("data", data);

  return (
    <>
      <h1>Name: {data.name}</h1>
      <h2>Description: {data.description}</h2>
      <h3>Category: {data.category}</h3>
      <p>
        Price: {data.price}
        {data.currency}{" "}
      </p>
    </>
  );
}
