import React from 'react'
const users = [
    { id: 1, firstName: "Duane", lastName: "Watson" },
    { id: 2, firstName: "Duane", lastName: "Johnson" },
  ];
 function object() {

      
      const userHeadings = users.map((user) => {
        return <h1 key={user.id}>{user.firstName}</h1>;
      });
      
}
export {object}