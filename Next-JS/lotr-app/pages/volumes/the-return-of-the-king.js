import { volumes } from "@/lib/data";
import Link from "next/link";

export default function TheReturnOfTheKing() {
  const { title, description, cover, books } = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => {
          return (
            <>
              <ul>
                <li key={ordinal}>
                  <span>
                    {ordinal}: {title}
                  </span>
                </li>
              </ul>
            </>
          );
        })}
      </ul>
    </>
  );
}
