import { useState } from "react";
import styles from "./App.css";

function App() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      dateOfBirth: formData.get("dateOfBirth"),
      email: formData.get("email"),
      telephone: formData.get("telephone"),
      gender: formData.get("gender"),
    };

    try {
      await fetch("http://localhost:3001/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setStatus("Form successfully submitted!");
    } catch (error) {
      setStatus("An error occurred");
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <p>{status}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input name="username" type="text" required={true} />
        </label>
        <label>
          Password
          <input name="password" type="password" required={true} />
        </label>
        <label>
          First Name
          <input name="firstName" type="text" />
        </label>
        <label>
          Last Name
          <input name="lastName" type="text" />
        </label>
        <label>
          Date of Birth
          <input name="dateOfBirth" type="date" />
        </label>
        <label>
          Email
          <input name="email" type="email" required={true} />
        </label>
        <label>
          Telephone
          <input name="telephone" type="text" />
        </label>
        <label>
          Gender
          <select name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="N/A">N/A</option>
          </select>
        </label>
        <button>Register</button>
      </form>
    </div>
  );
}

export default App;
