import useSWR from "swr";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  text-align: center;
`;

export default function HomePage() {
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

  const { data, isLoading, error } = useSWR("/api/random-character", fetcher);

  console.log("data", data);

  return (
    <Container>
      <h2>First Name: {data.firstName}</h2>
      <h2>Last Name: {data.lastName}</h2>
      <h2>Twitter: {data.twitterName}</h2>
      <h2>GeoHash: {data.geoHash}</h2>
    </Container>
  );
}
