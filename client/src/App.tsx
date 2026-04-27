import { useEffect, useState } from "react";

function App() {
  const [serverStatus, setServerStatus] = useState<string>('Checking...');

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
    .then(res => res.json())
    .then(data => setServerStatus(data.message))
    .catch(() => setServerStatus('Could not reach server'));
  }, []);

  return (
    <div>
      <h1>Game Tracker</h1>
      <p>Server status: {serverStatus}</p>
    </div>
  );

}

export default App;