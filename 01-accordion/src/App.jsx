import { useState } from 'react'
import './App.css'
import data from './data';
import SingleQuestion from './SingleQuestion';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
      <main>
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        <section>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} /> 
          })}
        </section>
      </div>
      </main>
  )
}

export default App


