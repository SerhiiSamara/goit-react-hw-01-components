import PropTypes from 'prop-types';
import {
	List,
	WrapFriendsListItem
} from './FriendsList.styled';
import { FriendsListItem } from './FriendsListItem';

export const FriendsList = ({ friends }) => {
  return (
    <List>
			{friends.map(({ id, avatar, name, isOnline }) => (
				<WrapFriendsListItem key={id}>
					<FriendsListItem avatar={avatar} name={name} isOnline={isOnline}> </FriendsListItem>
				</WrapFriendsListItem>
      ))}
    </List>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
