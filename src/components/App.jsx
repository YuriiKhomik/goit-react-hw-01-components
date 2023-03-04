import { Box } from './Box/Box';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from 'data/user';
import data from 'data/statisticsData';
import friends from 'data/friends';
import transactions from 'data/transactions';

export const App = () => {
  return (
    <Box
      pt="5"
      pb="5"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
