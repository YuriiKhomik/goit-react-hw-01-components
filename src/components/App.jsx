import { Box } from './Box/Box';
import { Profile } from './Profile/Profile';
import user from 'components/Profile/user';
import { Statistics } from './Statistics/Statistics';
import data from 'components/Statistics/data';

export const App = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </Box>
  );
};
