import React from 'react';

const InputPage = () => {
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#FFFFFF',
      }}
    >
      <h2>Enter your details</h2>
      {[
        'Revenue',
        'Previous Revenue',
        'Profit',
        'Current Assets',
        'Current Liabilities',
        'Debt',
        'Equity',
        'Operating Expenses',
        'Earnings',
      ].map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: '10px',
          }}
        >
          <label
            htmlFor={item}
            style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '5px',
            }}
          >
            {item}
          </label>
          <input
            type="number"
            id={item}
            name={item}
            style={{
              width: '100%',
              padding: '10px',
              margin: '0 0 20px 0',
              border: 'none',
              borderRadius: '5px',
              boxShadow: '0 0 0 1px #000', // This replaces border to achieve black box
              backgroundColor: '#fff'
            }}
          />
        </div>
      ))}
      <button
        style={{
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#63cc3a',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default InputPage;