import React, { createContext } from 'react';

const MemberContext = React.createContext({
  member: "",
  setMember: () => {}
});

export default MemberContext;