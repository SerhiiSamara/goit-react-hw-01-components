import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { StatisticsList } from './StatisticsList/StatisticsList';
import data from './StatisticsList/data.json';
import { FriendsList } from './FriendsList/FriendsList';
import friends from './FriendsList/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';
import { GlobalStyle } from './GlobalStyle';
import 'modern-normalize';

export const App = () => {
  return (
    <>
			<Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={ user.stats} />
      <StatisticsList title="Upload stats" statistics={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </>
  );
};
