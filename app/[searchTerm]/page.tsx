import getWikiResult from "@/lib/getWikiResult";
import Item from "./components/item";
import styles from "./page.module.css";
import mystyles from "./style.module.css";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResult(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} not found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search result for ${displayTerm}`,
  };
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResult(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data.query?.pages;

  const content = (
    <main className={mystyles.p}>
      {results
        ? Object.values(results).map((result) => (
            <Item key={result.pageid} result={result} />
          ))
        : `${searchTerm} not found`}
    </main>
  );

  return content;
}
