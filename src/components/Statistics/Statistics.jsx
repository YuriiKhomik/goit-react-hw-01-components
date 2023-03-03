import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import { StatItem } from './StatItem/StatItem';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      minWidth="380px"
      borderRadius="normal"
      boxShadow="main"
      textAlign="center"
      mt="6"
      as="section"
    >
      {title && (
        <Box padding="3">
          <h2>{title.toUpperCase()}</h2>
        </Box>
      )}

      <Box
        display="flex"
        flexWrap="wrap"
        gap="10px"
        justifyContent="center"
        as="ul"
      >
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem
              key={id}
              label={label}
              percentage={percentage}
              color={getRandomHexColor()}
            />
          );
        })}
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
