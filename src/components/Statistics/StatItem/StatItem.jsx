import { Label, Percentage, StyledStatItem } from './Statitem.styled';
export const StatItem = ({ label, percentage, color }) => {
  return (
    <StyledStatItem color={color}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StyledStatItem>
  );
};
