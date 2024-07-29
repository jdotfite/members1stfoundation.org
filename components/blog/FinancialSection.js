import React, { useState } from 'react';

const FinancialSection = () => {
  const [age, setAge] = useState('');
  const [interest, setInterest] = useState('Making a budget');

  const categories = [
    { title: 'MAKE MONEY', icon: '💰' },
    { title: 'MANAGE MONEY', icon: '📊' },
    { title: 'SAVE MONEY', icon: '💸' },
    { title: 'SPEND MONEY', icon: '💎' },
    { title: 'BORROW MONEY', icon: '🏦' },
    { title: 'PROTECT MONEY', icon: '🛡️' },
    { title: 'INVEST MONEY', icon: '📈' },
  ];

  const interests = [
    'Making a budget',
    'Opening a new banking account',
    'Paying for college',
    'Starting a side business',
    'Finding the right credit card',
    'Investing for the long run',
    'Managing my personal finances',
    'Increasing my income',
    'Getting out of debt',
    'Paying off student loans',
    'Saving for retirement',
    'Choosing the best stocks to buy',
    'Insurance',
    'Financial independence',
    'Estate planning',
    "Paying for child's college",
    'Making money from home',
  ];

  return (
    <section className="section-py bg-brand-dark-blue text-white">
      <div class="container">
      <div className="grid max-w-screen-xl mx-auto lg:gap-x-8 xl:gap-x-18 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <p className="text-teal-300 text-sm uppercase mb-4">| Unlock Your Financial Potential |</p>
          <h1 className="text-5xl font-bold mb-6">We’re dedicated to improving your financial success.</h1>
          <p className="text-xl mb-8">
            Get the knowledge you need to make informed financial decisions and achieve your goals.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-teal-600 text-white p-4 rounded-lg flex flex-col items-center justify-center transition-colors duration-300 hover:bg-teal-500"
              >
                <span className="text-2xl mb-2">{category.icon}</span>
                <span className="text-sm font-semibold">{category.title}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-5">
          <div className="bg-white text-gray-800 p-6 shadow-lg -mb-24 lg:w-11/12">
            <h2 className="text-2xl font-bold mb-4">Ready to turn the tables on money? Let's get started.</h2>
            <p className="mb-6">Get the best content for you by answering these two simple questions.</p>
            <form>
              <div className="mb-4">
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                  HOW OLD ARE YOU?
                </label>
                <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                  WHAT ARE YOU MOST INTERESTED IN?
                </label>
                <select
                  id="interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 bg-white"
                >
                  {interests.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 hover:bg-gray-800 transition duration-300"
              >
                Let's go!
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialSection;
