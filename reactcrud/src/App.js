import React, { useState } from 'react';
import data from './mock-data.json';
import './App.css'

const App = () => {
  const [contact, setContact] = useState(data);
  const [addData, setAddData] = useState({
    fullName: " ",
    address: " ",
    phoneNumber: " ",
    email: " "
  })
  const handleAddFormChange = (event)  => { 
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newData = {...addData};
    newData[fieldName] = fieldValue;
    setAddData(newData);
  }
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      fullName: addData.fullName,
      address: addData.address,
      phoneNumber: addData.phoneNumber,
      email: addData.email
    };
    const newContacts = [...contact, newContact];
    setContact(newContacts);
  }
  return (
    <div className='fields'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((contact) => (
            <tr>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
              <td>{contact.email}</td>
            </tr>
          ))}

        </tbody>
      </table>
      <h2>Add new contact</h2>
          
    </div>

  );
};

export default App;
