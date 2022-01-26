import { useState } from "react";
import { Tweet } from "./components/Tweet";

function App() {
  const [tweets, setTweets] = useState<string[]>([])

  const [countTweets, setCountTweets] = useState<number>(1)

  function createTweet() {
    setCountTweets(countTweets+1);
    const tweet = `Tweet ${countTweets}`;
    setTweets([...tweets, tweet]);
  }

  return (
    <div>
      {
        tweets.map(tweet => {
          return <Tweet text={tweet} />
        })
      }

      <button onClick={createTweet}>Adicionar Tweet</button>
    </div>
  );
}

export default App
