import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { StatisticsList } from './StatisticsList/StatisticsList';
import data from './StatisticsList/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';
import { GlobalStyle } from './GlobalStyle';
import 'modern-normalize';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <StatisticsList title="Upload stats" statistics={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </>
  );
};
