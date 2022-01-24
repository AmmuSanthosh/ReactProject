import React from 'react';

function tableItme(props) {
  return <form>
            <input type="text" name="fullName" required="required" placeholder="Enter the name.." onChange={handleAddFormChange} />
            <input type="text" name="address" required="required" placeholder="Enter the address.." onChange={handleAddFormChange} />
            <input type="text" name="phoneNumber" required="required" placeholder="Enter the mobile no.." onChange={handleAddFormChange} />
            <input type="text" name="email" required="required" placeholder="Enter the email.." onChange={handleAddFormChange} />

            <button >Add</button>
          </form>
}

export default tableItme;


