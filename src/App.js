import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    MobileNo: "",
    country: "",
    State: "",
    City:"",
    Message:"",
  });


  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "Mobile No",
      type: "number",
      placeholder:"Mobile No",
      label: "Mobile No",
      errorMessage: "Enter a valid mobile no",
      pattern: `^(?:(?:|0{0,2})91(*)?|[0]?)?[789]{9}$`,
      required: "true",
    },
    {
      id: 4,
      name: "Country",
      type: "text",
      placeholder: "Country",
      label: "Country",
      required: true,
    },
    {
      id: 5,
      name: "State",
      type: "text",
      placeholder: "State",
      label: "State",
      required: true,
    },
    {
      id: 6,
      name: "City",
      type: "text",
      placeholder: "City",
      label: "City",
      required: true,
    },
    {
      id: 7,
      name: "Message",
      type: "area",
      placeholder: "Message",
      label: "Message",
    },
  ];

  const handleSubmit = (e) => {
    //e.preventDefault();
    console.log(values);
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;