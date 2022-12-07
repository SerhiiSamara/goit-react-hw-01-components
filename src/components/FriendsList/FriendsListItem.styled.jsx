import styled from 'styled-components';

// export const FriendItem = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 7px;
//   padding: 7px 20px;
//   border: solid 2px #c1c1c1;
//   border-radius: 5px;
// `;

export const FriendIcon = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const FriendImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

export const FriendName = styled.p`
  font-size: 18px;
  font-weight: 700;
`;