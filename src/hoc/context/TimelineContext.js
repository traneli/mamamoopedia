import React, { createContext } from 'react';

const TimeLineContext = React.createContext({
  selectedIndex: 0,
  setIndex: () => {}
});

export default TimeLineContext;