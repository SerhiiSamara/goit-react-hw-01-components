import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Foto,
  Name,
  Tag,
  Stats,
  StatsItem,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats : { followers, views, likes } }) => {
  return (
    <Container>
      <Description>
        <Foto src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <p className="location">{location}</p>
      </Description>
      <Stats className="stats">
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </StatsItem>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    // stats: PropTypes.shape({
    //   followers: PropTypes.number.isRequired,
    //   views: PropTypes.number.isRequired,
    //   likes: PropTypes.number.isRequired,
    // }).isRequired,
  };
