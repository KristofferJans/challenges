import useSWR from "swr";

export default function ProductList() {
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
  const { data, isLoading, error } = useSWR("/api/products", fetcher);

  if (isLoading) {
    return <h1>Loading data...</h1>;
  }

  if (!data) {
    return;
  }

  console.log("data", data);

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <h1>Name: {product.name}</h1>
          <h2>Description: {product.description}</h2>
          <h3>Category: {product.category}</h3>
          <p>
            Price: {product.price}
            {product.currency}{" "}
          </p>
        </li>
      ))}
    </ul>
  );
}
