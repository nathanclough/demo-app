import '../App.css'
import ProfileHeader from '../components/ProfileHeader/ProfileHeader';
import CheckboxWithLabel from '../components/CheckboxWithLabel/CheckboxWithLabel';

function Home() {
  return (
    <div>
      <header className="App-header">
        Home Page
        <ProfileHeader name="nathan"></ProfileHeader>
        <ProfileHeader name="Rex"></ProfileHeader>
      </header>
    </div>
  );
}

export default Home;