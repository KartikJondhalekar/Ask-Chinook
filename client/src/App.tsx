import { useState } from 'react';
import styles from './index.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [queryDescription, setQueryDescription] = useState('');
  const [sqlQuery, setSqlQuery] = useState('');

  const onFormSubmit = async (e: any) => {
    e.preventDefault();
    console.log(queryDescription);
    const query = await generateQuery();
    setSqlQuery(query);
  };

  const generateQuery = async () => {
    const response = await fetch('http://localhost:3000/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ queryDescription: queryDescription }),
    });
    const data = await response.json();
    return data.response;
  };

  return (
    <main className={styles.main}>
      <div className="d-flex align-items-center mb-4 gap-2">
        <i className="bi bi-database-fill h1 m-0"></i>
        <h1 className='m-0'>Ask Chinook</h1>
      </div>

      <form onSubmit={onFormSubmit}>
        <input type='text'
          name='query-description'
          placeholder='Ask me anything about the Chinook database...'
          onChange={(e) => { setQueryDescription(e.target.value) }} />
        <input type='submit' value='Ask' />
      </form>

      {sqlQuery && <div className={styles.queryOutput}>
        {sqlQuery}
      </div>}

    </main>
  )
}

export default App
