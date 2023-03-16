import React, {useState} from 'react';
import TestContext from './testContext';

const TestProvider = props => {
  const [total, setTotal] = useState(0);

  return (
    <TestContext.Provider
      value={{
        //   total: total,
        total,
        setTotal,
        //   setTotal: (value ) > setTotal(value),
      }}>
      {props.children}
    </TestContext.Provider>
  );
};

export default TestProvider;
