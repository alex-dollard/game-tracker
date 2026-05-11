interface Props {
  token: string;
  onLogout: () => void;
}

export default function HomePage({ token, onLogout }: Props) {
  return (
    <div>
      <button onClick={onLogout}>Logout</button>
      <p>Home page coming soon</p>
    </div>
  );
  
}

