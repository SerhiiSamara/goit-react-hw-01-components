import styled from 'styled-components';


export const Container = styled.section`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  border: solid 2px #c1c1c1;
`;

export const Title = styled.h2`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
`;

export const Stats = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: #c1c1c1;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
	background-color: ${props => {return props.color}}
`;

export const StatsLabel = styled.span`
  margin-bottom: 15px;
`;

export const StatsPercentage = styled.span`
  font-size: 22px;
`;
