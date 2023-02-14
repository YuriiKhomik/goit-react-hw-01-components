import {
  StyledProfile,
  DescriptionArea,
  UserImage,
  UserName,
  UserTag,
  UserLocation,
} from './Profile.styled';

export const Profile = () => {
  return (
    <StyledProfile>
      <DescriptionArea>
        <UserImage
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <UserName>Petra Marica</UserName>
        <UserTag>@pmarica</UserTag>
        <UserLocation>Salvador, Brasil</UserLocation>
      </DescriptionArea>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">1000</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">2000</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">3000</span>
        </li>
      </ul>
    </StyledProfile>
  );
};
