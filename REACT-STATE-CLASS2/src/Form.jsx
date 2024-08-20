import { useState } from "react";

export default function Form() {
  let [formData, SetformData] = useState({
    fullName: "",
    username: "",
  });

  let handleInputChange = (event) => {
    let fieldname = event.target.name;
    let newValue = event.target.value;
    SetformData((curr) => {
      curr[fieldname] = newValue;
      return { ...curr };
    });
    console.log(newValue);
  };
  //   let [fullName, setFullName] = useState("");

  //   let NameChange = (event) => {
  //     setFullName(event.target.value);
  //   };

  return (
    <form>
      <label htmlFor="fullName">FullName</label>
      <input
        placeholder="enter full name"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
        name="fullName"
      />
      <br />
      <br />
      <label htmlFor="username">username</label>
      <input
        placeholder="enter user name"
        type="text"
        value={formData.username}
        onChange={handleInputChange}
        name="username"
      />

      <button>Submit</button>
    </form>
  );
}
