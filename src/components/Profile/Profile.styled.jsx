import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const Description = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  background-color: #e9e8e8;
`;

export const Foto = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  width: 200px;
  height: 200px;
  background-color: #fff;
  border: solid 2px #c1c1c1;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
`;

export const Stats = styled.ul`
  display: flex;
  background-color: #bb9a9a;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
`;

export const StatsLabel = styled.span`
  display: block;
`;

export const StatsQuantity = styled.span`
  display: block;
`;
