import { Profile } from './components/Profile/Profile';
import userData from './userdata.json';

import { FriendList } from './components/FriendList/FriendList';
import friends from './friends.json';

import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
