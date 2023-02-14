import styled from 'styled-components';

export const StyledProfile = styled.div`
  padding-top: ${p => p.theme.space[4]}px;
  min-width: 380px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const DescriptionArea = styled.div`
  text-align: center;
`;

export const UserImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: ${p => p.theme.radii.round};
  width: 180px;
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
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.body};
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const UserLocation = styled.p`
  color: ${p => p.theme.colors.grey};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.body};
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const UserStats = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: ${p => p.theme.colors.backgroundGrey};
  color: ${p => p.theme.colors.grey};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.body};
  li:not(:first-child) {
    border-left: ${p => p.theme.borders.normal} ${p => p.theme.colors.grey};
  }
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  border-top: ${p => p.theme.borders.normal} ${p => p.theme.colors.grey};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.grey};
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.grey};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const Quantity = styled.span`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.body};
`;
