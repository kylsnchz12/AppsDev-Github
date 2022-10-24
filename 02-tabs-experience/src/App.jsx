import { useState } from 'react'
import './App.css'
import data from './data';
import data2 from './data2';

function App() {
  const [bio, setBio] = useState(data);
  const [value, setValue] = useState(0);
  const { job, name, date } = bio[value];

  return (
      <main>
      <div className='mainDiv'>
        <div className='title'>
          <h2>Expeience</h2>
          <div className="underline"></div>
        </div>
        <div className='center'>
          <div className='btnContainer'>
            {bio.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className='btn'
                >
                  {item.name}
                </button>
              );
            })}
          </div>
          <article className='infoContainer'>
            <h3>{job}</h3>
            <h4>{name}</h4>
            <p className='infoDate'>{date}</p>
            {data2[value].map((item) => {
              return (
                <div className='infoDesc'>
                  <p>{item}</p>
                </div>
              );
            })}
          </article>
          </div>
          <button type="button" className="btn">
              more info
            </button>
      </div>
      </main>
  )
}

export default App


