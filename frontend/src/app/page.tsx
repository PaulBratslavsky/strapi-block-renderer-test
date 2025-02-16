import { type BlocksContent } from "@strapi/blocks-react-renderer";
import BlockRendererClient from "./BlockRendererClient";

async function getStrapiData() {
  const res = await fetch("http://localhost:1337/api/notes");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const { data } = await getStrapiData();

  const content: BlocksContent = data[0].content;

  return (
    <main className="max-w-[980px] mx-auto my-36">
      <h1>{data[0].title}</h1>
      <BlockRendererClient content={content} />
    </main>
  );
}
