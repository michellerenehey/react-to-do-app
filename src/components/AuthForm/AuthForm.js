import './AuthForm.css';

export default function AuthForm({
  message,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) {
  return (
    <div>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-section">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter email"
          />
        </div>
        <div className="form-section">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password"
          />
        </div>
        <input type="submit" className="form-section submit-button" />
      </form>
    </div>
  );
}
