
 "use client"
import React, { useState } from "react";

export default function CustomForm({ status, message, onValidated }) {
  const [email, setEmail ] = useState("");
  //  const [message, setMessage] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Submitting Name ${email}`);
    onValidated({
      EMAIL: email,
      NAME: "John"
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <label>
        {/* Name: */}
        <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
       {/* <label htmlFor='MERGE1'>
                    First name
                    <input 
                        type="text" 
                        name="FNAME" 
                        id="MERGE1" 
                        value={this.state.fNameValue} 
                        onChange={(e)=>{this.setState({fNameValue: e.target.value});}}
                    />
                </label> */}
      <input className="ml-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit" value="Submit" />
    </form>
  );
}
