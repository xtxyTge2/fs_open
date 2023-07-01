import { useState } from 'react'


const Anectdote = ({text, vote}) => {
  return (
    <div>
      <b>{text}</b>
      <br></br>
      has {vote} votes
    </div>
  )
}

const Button = ({clickedHandler, text}) => <button onClick={clickedHandler}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length - 1));

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

  const [selected, setSelected] = useState(getRandomInt(anecdotes.length - 1));

  const selectNextRandomAnectdote = () => {
    setSelected(getRandomInt(anecdotes.length - 1));
  };

  const voteForSelectedAnecdote = () => {
     const copy = [...votes];
     copy[selected] += 1;

     setVotes(copy);
  };

  const getMostVotedAnectdoteIndex = () => {
    let maxVotes = 0;
    let maxVotesIndex = -1;
    for(let i = 0; i < votes.length; i++) {
        if(votes[i] >= maxVotes) {
          maxVotes = votes[i];
          maxVotesIndex = i;
        }
    }
    return maxVotesIndex;
  }

  const maxVotesIndex = getMostVotedAnectdoteIndex();
  const maxVoteAnectdoteText = anecdotes[maxVotesIndex];
  const maxVote = votes[maxVotesIndex];

  return (
    <div>
      <h1>Anectdote of the day</h1>
      <Anectdote text={anecdotes[selected]} vote={votes[selected]}></Anectdote>
      <Button clickedHandler={voteForSelectedAnecdote} text='vote'></Button>
      <Button clickedHandler={selectNextRandomAnectdote} text='next anectdote'></Button>
      <h1>Anectdote with most votes</h1>
      <Anectdote text={maxVoteAnectdoteText} vote={maxVote}></Anectdote>
    </div>
  )
}

export default App