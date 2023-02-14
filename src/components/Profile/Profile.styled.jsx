import styled from 'styled-components';

export const StyledProfile = styled.div`
  padding: ${p => p.theme.space[4]}px;
`;

export const DescriptionArea = styled.div`
  text-align: center;
`;

export const UserImage = styled.img`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: ${p => p.theme.radii.round};
  width: 200px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const UserName = styled.p`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: ${p => p.theme.lineHeights.heading};
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const UserTag = styled.p`
  color: ${p => p.theme.colors.grey};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: ${p => p.theme.lineHeights.body};
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const UserLocation = styled.p`
  color: ${p => p.theme.colors.grey};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: ${p => p.theme.lineHeights.body};
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
