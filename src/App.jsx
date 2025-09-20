import "./App.css";
import Countries from "./components/Countries.jsx/Countries";
import { Suspense } from "react";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

function App() {
  return (
    <>
      <h1>My world on the go..</h1>
      <Suspense fallback={<p>Countries Loading..</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
