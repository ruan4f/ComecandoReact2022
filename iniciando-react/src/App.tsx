import { useState } from "react";
import { Tweet } from "./components/Tweet";
import './App.css';
import { AppRoutes } from "./Routes";


function App() {
  /*const [tweets, setTweets] = useState<string[]>([]);
  const [countTweets, setCountTweets] = useState<number>(1);

  function createTweet() {
    setCountTweets(countTweets+1);
    const tweet = `Tweet ${countTweets}`;
    setTweets([...tweets, tweet]);
  }*/

  return (
    <AppRoutes/>
    /*<div>
      {
        tweets.map((tweet, index) => {
          return <Tweet text={tweet} key={index}/>
        })
      }

      <button 
        onClick={createTweet}
        style={{
          backgroundColor: '#8257e6',
          border: 0,
          padding: '6px 12px',
          color: '#FFF'
        }}
      >
        Adicionar Tweet
      </button>
    </div>*/
  );
}

export default App
