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
import { user } from 'components/Profile/user';

export const Profile = () => {
  return (
    <StyledProfile>
      <DescriptionArea>
        <UserImage src={user.avatar} alt="User avatar" />
        <UserName>Petra Marica</UserName>
        <UserTag>@pmarica</UserTag>
        <UserLocation>Salvador, Brasil</UserLocation>
      </DescriptionArea>

      <UserStats>
        <UserStatsItem>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">1000</Quantity>
        </UserStatsItem>
        <UserStatsItem>
          <Label className="label">Views</Label>
          <Quantity className="quantity">2000</Quantity>
        </UserStatsItem>
        <UserStatsItem>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">3000</Quantity>
        </UserStatsItem>
      </UserStats>
    </StyledProfile>
  );
};
