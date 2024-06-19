import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(15);
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setJoke(data.joke));

    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate('/');
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center'>
      <h1 className='text-5xl font-newsreader'>404</h1>
      <p className='font-newsreader'>Don't worry I will take you back in {seconds} seconds...</p>
    <p className="text-center font-newsreader mt-12 max-w-[500px]">"{joke}"</p>

    </div>
  );
};

export default NotFound;