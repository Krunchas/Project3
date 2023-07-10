import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>JKT</title>
        <meta name="description" content="App by Krunchas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <h1>Japanese Krunchas Translator</h1>
          <div className="text-input">
            <textarea className="input" placeholder="English..."></textarea>
            <textarea className="output" placeholder="Japanese..." readOnly disabled></textarea>
          </div>
        </div>
      </main>
    </>
  );
}
