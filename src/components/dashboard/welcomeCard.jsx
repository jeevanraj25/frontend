import React, { useEffect } from 'react';
import useContextApi from '../../contextAPI/useContextApi';

const WelcomeCard = ({ trainerName }) => {
  const {university} = useContextApi()
  useEffect(() => {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.1}s`;
      letter.classList.add('animate-fade-in');
    });
  }, []);

  return (
    <div className="flex flex-1 border rounded-md shadow-md">
      <div className="flex flex-col items-start justify-between px-4 py-8 w-full">
        <h1 className="font-bold text-5xl px-4 mb-5">
          Welcome{' '}
          <span className="text-[#009eb0]">
            {trainerName.split('').map((char, index) => (
              <span key={index} className="letter opacity-0">
                {char}
              </span>
            ))}
          </span>
        </h1>
        <div className="flex items-center w-full px-5">
          <div className="w-1/2">
            <h2 className="text-2xl ml-1">Select Institute</h2>
            <select className='text-2xl font-semibold'>
              {university.map((value,index) => {
                return(
                  <option onSelect={() => console.log(value.id)} key={index}>{value.name}</option>
                )
              })}
            </select>
          </div>
          <div className="w-1/2 flex justify-end">
            <p className="text-lg font-semibold">Select Year:</p>
            <select className="" name="" id="">
              <option value="">2024</option>
              <option value="">2023</option>
              <option value="">2022</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
