import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import {
  UserImage,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserStatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Box pt="4" minWidth="380px" borderRadius="normal" boxShadow="main">
      <Box textAlign="center">
        <UserImage src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Box>

      <UserStats>
        <UserStatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </UserStatsItem>
        <UserStatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </UserStatsItem>
        <UserStatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </UserStatsItem>
      </UserStats>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
