import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [chocolateVotes, setChocolateVotes] = useState(0);
  const [vanillaVotes, setVanillaVotes] = useState(0);
  const [strawberryVotes, setStrawberryVotes] = useState(0);
  let totalVotes = chocolateVotes + vanillaVotes + strawberryVotes;
  const getPercentage = (flavorVotes: number): string => {
    return `${((flavorVotes / totalVotes) * 100).toFixed(2)}%`;
  };
  return (
    <section className="Votes">
      <h2>Vote Here</h2>
      <div>
        <button
          onClick={() => {
            setChocolateVotes((prev) => {
              return prev + 1;
            });
          }}
        >
          Chocolate
        </button>
        <button
          onClick={() => {
            setVanillaVotes((prev) => {
              return prev + 1;
            });
          }}
        >
          Vanilla
        </button>
        <button
          onClick={() => {
            setStrawberryVotes((prev) => {
              return prev + 1;
            });
          }}
        >
          Strawberry
        </button>
      </div>
      {chocolateVotes !== 0 ? (
        <div>
          <p>
            Chocolate: {chocolateVotes} ({getPercentage(chocolateVotes)})
          </p>
          <div className="votesBar"></div>
        </div>
      ) : (
        <p>Chocolate has no votes yet.</p>
      )}
      {vanillaVotes !== 0 ? (
        <div>
          <p>
            Vanilla: {vanillaVotes} ({getPercentage(vanillaVotes)})
          </p>
          <div className="votesbar"></div>
        </div>
      ) : (
        <p>Vanilla has no votes yet.</p>
      )}
      {strawberryVotes !== 0 ? (
        <div>
          <p>
            Strawberry: {strawberryVotes} ({getPercentage(strawberryVotes)})
          </p>
          <div className="votesBar"></div>
        </div>
      ) : (
        <p>Strawberry has no votes yet.</p>
      )}
    </section>
  );
};

export default Votes;
