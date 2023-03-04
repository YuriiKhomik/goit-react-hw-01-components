import styled from 'styled-components';

export const StyledStatItem = styled.li`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 20px) / 4);
  padding: ${p => p.theme.space[2]}px;
  background-color: ${p => p.color};
`;

export const Label = styled.span`
  margin-bottom: ${p => p.theme.space[1]}px;

  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: ${p => p.theme.lineHeights.body};
`;

export const Percentage = styled.span`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.body};
`;
