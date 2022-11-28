import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';

import { Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';


const Balance = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-16">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-68 rounded-xl w-full lg:w-50 p-10 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Balance</p>
              <p className="text-2xl">$2000.00</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>

          <div className="mt-8 justify-center">
            <Button
              color="white"
              bgColor={currentColor}
              text="Spilt the bill"
              borderRadius="10px"
            />
          </div>

          <div className="mt-7">
            <Button
              color="white"
              bgColor={currentColor}
              text="Pay"
              borderRadius="15px"
            />
            {' '}
            <Button
              color="white"
              bgColor={currentColor}
              text="Request"
              borderRadius="15px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
