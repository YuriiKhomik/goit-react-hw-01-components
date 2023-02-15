import { Box } from './Box/Box';
import { Profile } from './Profile/Profile';
import user from 'components/Profile/user';

export const App = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Box>
  );
};
