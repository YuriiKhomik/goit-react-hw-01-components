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

export const Profile = p => {
  const { username, tag, location, avatar, stats } = p.user;
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
          <Quantity>{stats.followers}</Quantity>
        </UserStatsItem>
        <UserStatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </UserStatsItem>
        <UserStatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </UserStatsItem>
      </UserStats>
    </Box>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
