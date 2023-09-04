
import { Statistics } from './Sattistic';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { useState } from 'react';


export const App =()=>{
  const [good, setGoodValue] = useState(0);
  const [neutral, setNeutralValue] = useState(0);
  const [bad, setBadValue] = useState(0);

 const handleClickGood = () => {
  setGoodValue(prevState => prevState + 1)}

 const handleClickNeutral=()=>{
  setNeutralValue(prevState => prevState + 1)}
   
  const handleClickBad=()=>{
    setBadValue(prevState => prevState + 1)}
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <Section
            title={'Please, leave feedback'}
            children={<FeedbackOptions onLeaveFeedbackGood={handleClickGood}
            
            onLeaveFeedbackNeutral={handleClickNeutral}
            onLeaveFeedbackBad={handleClickBad}/>}
          />
          <Section
            title={'Statistics'}
            children={<Statistics good={good} bad={bad} neutral={neutral} />}
          />
        </div>
      </div>
    );
  }