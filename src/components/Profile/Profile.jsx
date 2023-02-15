import PropTypes from 'prop-types';
import {
  StyledProfile,
  DescriptionArea,
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
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = p.userData;
  return (
    <StyledProfile>
      <DescriptionArea>
        <UserImage src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </DescriptionArea>

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
    </StyledProfile>
  );
};

Profile.propTypes = {
  userData: PropTypes.exact({
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
