import PropTypes from 'prop-types';
import { StyledFriend, Status, Avatar, Name } from './FriendListItem.styled';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <StyledFriend>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </StyledFriend>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
