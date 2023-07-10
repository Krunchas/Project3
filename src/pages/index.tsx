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
            <div className="english">
              <p className="english-tag">English</p>
              <textarea className="input" placeholder="Enter text"></textarea>
            </div>
            <div className="japanese">
              <p className="japanese-tag">Japanese</p>
              <textarea className="output" placeholder="Translation..." readOnly disabled></textarea>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
