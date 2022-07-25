import styled from 'styled-components';
import './App.css';
import Loading from './components/Loading';
import Skeleton, { Circle, Rectangle } from './components/Skeleton';

const SkelDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  row-gap: 10px;
  justify-content: space-between;

  & .text-skel {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    row-gap: 5px;
  }
`

function App() {
  return (
    <>
      <Loading />

      <Skeleton width="300px" height="200px" animation="blink">
        <Rectangle width="300px" height="200px" />
        <SkelDiv>
          <Circle radius="50px" />
          <div className='text-skel'>
            <Rectangle width="240px" height="20px" />
            <Rectangle width="240px" height="20px" />
          </div>
        </SkelDiv>
      </Skeleton>
    </>
  );
}

export default App;
