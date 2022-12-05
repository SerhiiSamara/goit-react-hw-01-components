import PropTypes from 'prop-types';
import { getRandomHexColor } from './GetColor';

import {
  Container,
  Title,
  Stats,
  StatsItem,
  StatsLabel,
  StatsPercentage,
} from './StatisticsList.styled';

export const StatisticsList = ({ title = '', statistics }) => {
  const titleStats = title.toUpperCase();
  return (
    <Container>
      {title && <Title>{titleStats}</Title>}
      <Stats>
        {statistics.map(({ id, label, percentage }) => (
          <StatsItem key={id} color={getRandomHexColor()}>
            <StatsLabel>{label}</StatsLabel>
            <StatsPercentage>{percentage} %</StatsPercentage>
          </StatsItem>
        ))}
      </Stats>
    </Container>
  );
};

StatisticsList.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
