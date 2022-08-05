# react-components

## 1. Loading
![img](./img/Loading.gif)
```javascript
import Loading from './components/Loading/Loading';

const colors = ["#8dc8fc", "#cdeb60", "#fca78d"];

const App = () => {
    return <Loading number={4} colors={colors} /> ;
};
```

## 2. Skeleton
![img](./img/Skeleton.gif)
```javascript
import Skeleton, { Circle, Rectangle } from './components/Skeleton/Skeleton';

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

const App = () => {
    return (
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
    );
};
```
