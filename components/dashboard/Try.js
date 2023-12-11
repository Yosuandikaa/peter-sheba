// pages/index.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/wishes', { name, message });
      setName('');
      setMessage('');
      setWishes([...wishes, response.data.data]);
    } catch (error) {
      console.error('Error submitting wish:', error);
    }
  };

  const fetchWishes = async () => {
    try {
      const response = await axios.get('/api/wishes');
      setWishes(response.data.data);
    } catch (error) {
      console.error('Error fetching wishes:', error);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <button type="submit">Send Wish</button>
      </form>

      <div>
        <h2>Wishes:</h2>
        <ul>
          {wishes.map((wish) => (
            <li key={wish._id}>
              <strong>{wish.name}</strong>: {wish.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
