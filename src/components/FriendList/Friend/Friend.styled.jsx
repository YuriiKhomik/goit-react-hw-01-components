import styled from 'styled-components';

export const StyledFriend = styled.li`
  min-width: 200px;
  min-height: 50px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.main};

  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const Status = styled.span`
  width: 13px;
  height: 13px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 48px;
  margin-left: 10px;
`;

export const Name = styled.p`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.heading};
  margin-left: 10px;
`;
