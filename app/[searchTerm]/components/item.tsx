import Link from "next/link";
import styles from "../style.module.css";

type Props = {
  result: Result;
};
export default function Item({ result }: Props) {
  const itemTextCol = (
    <div
      style={{
        display: "flex",
        width: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          className={styles.link}
        >
          {result.title}🔗
        </Link>
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <p>{result.extract}</p>
      </div>
    </div>
  );

  const content = result?.thumbnail?.source ? (
    <article className="m-4 max-w-lg" style={{ padding: "3rem" }}>
      <div
        className="flex flex-row gap-4"
        style={{
          display: "flex",
          margin: 0,
          padding: 0,
        }}
      >
        {result.thumbnail.source && (
          <div
            className="flex flex-col justify-center"
            style={{ width: "10%" }}
          >
            <img
              src={result.thumbnail.source}
              alt={result.title}
              width={"100%"}
              height={"100%"}
              loading="lazy"
            />
          </div>
        )}
        <div
          className="flex flex-row gap-4"
          style={{
            display: "flex",
            width: "100%",
            margin: 0,
            padding: 0,
          }}
        >
          <div
            className="flex flex-col justify-center"
            style={{
              display: "flex",
              width: "100%",
              margin: 0,
              padding: 0,
            }}
          >
            {itemTextCol}
          </div>
        </div>
      </div>
    </article>
  ) : (
    <article className="m-4 max-w-lg" style={{ padding: "3rem" }}>
      <div
        className="flex flex-row gap-4"
        style={{
          display: "flex",
          margin: 0,
          padding: 0,
        }}
      >
        {itemTextCol}
      </div>
    </article>
  );

  return content;
}
