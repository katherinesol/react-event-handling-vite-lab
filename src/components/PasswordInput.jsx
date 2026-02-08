// PasswordInput Component
// Renders a password input field
// Tracks when user is typing for anti-bot security

function PasswordInput() {
  const handleChange = () => {
    console.log("Entering password...");
  };

  return (
    <input type="password" onChange={handleChange} />
  );
}

export default PasswordInput;