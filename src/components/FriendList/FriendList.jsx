import PropTypes from 'prop-types';
import { Friend } from './Friend/Friend';
import { StyledFriendList } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <StyledFriendList>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
        );
      })}
    </StyledFriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
