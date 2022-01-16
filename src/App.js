import './App.css';
import ProfileHeader from './components/ProfileHeader/ProfileHeader';
import CheckboxWithLabel from './components/CheckboxWithLabel/CheckboxWithLabel';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <ProfileHeader name="nathan"></ProfileHeader>
        <CheckboxWithLabel/>
      </header>
    </div>
  );
}

export default App;
