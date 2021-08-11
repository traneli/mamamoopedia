import React, { useContext, useRef, useEffect, useState } from 'react';
import PageTemplate from '../PageTemplate';

import MembersMain from './MembersMain'
import MembersSolar from './MembersSolar.js';
import MembersMoonbyul from './MembersMoonbyul.js';
import MemberContext from '../hoc/context/MainContext';

function Members() {
  const [member, setMember] = useState("");
  const value = { member, setMember };

  function MembersContent(props){
    const selectedMember = props.selectedMember

    if(selectedMember === "moonbyul") {
      return (
        <section class="members-main-content"><MembersMoonbyul/></section>
      )
    } else if(selectedMember === "solar") {
      return (
        <section class="members-main-content"><MembersSolar/></section>
      )
    }
    return <MembersMain/>;
  }

  return (
    <PageTemplate>
      {/* <section class="members-main-content"> */}
        {/* <div class="members-main-content-top">
          <h2>Meet the members</h2>
        </div> */}

        <MemberContext.Provider value={value}>
         {
           <MembersContent selectedMember={member}/>
         }
       </MemberContext.Provider>
    </PageTemplate>
  );
}

export default Members;