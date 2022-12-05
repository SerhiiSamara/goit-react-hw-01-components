import PropTypes from 'prop-types';
import {
  FriendName,
  FriendIcon,
  FriendImg,
  FriendItem,
  FriendsList,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id}>
          <FriendIcon isOnline={isOnline}></FriendIcon>
          <FriendImg src={avatar} alt={name} />
          <FriendName>{name}</FriendName>
        </FriendItem>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
