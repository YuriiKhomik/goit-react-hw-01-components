import { Profile } from './Profile/Profile';
import user from 'components/Profile/user';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile userData={user} />
    </div>
  );
};
