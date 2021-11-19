import './App.css';
import { Container } from 'react-bootstrap';
import LoginPage from './components/loginPage';

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="W-100">
        <LoginPage />
      </div>
    </Container>
  );
}

export default App;
