import PropTypes from 'prop-types';

import {
  FriendName,
  FriendIcon,
  FriendImg,
} from './FriendsListItem.styled';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
				<>
					<FriendIcon isOnline={isOnline}></FriendIcon>
          <FriendImg src={avatar} alt={name} />
          <FriendName>{name}</FriendName>
				</>
  );
};

FriendsListItem.propTypes = {
	isOnline: PropTypes.bool.isRequired,
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};