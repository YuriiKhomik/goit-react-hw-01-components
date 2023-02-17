import { Box } from './Box/Box';
import { Profile } from './Profile/Profile';
import user from 'components/Profile/user';
import { Statistics } from './Statistics/Statistics';
import data from 'components/Statistics/data';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions';

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
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
