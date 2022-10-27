# react-components

## 1. Loading

![img](./img/Loading.gif)

```javascript
import { Loading } from "./components";

const colors = ["#8dc8fc", "#cdeb60", "#fca78d"];

const App = () => {
  return <Loading number={4} colors={colors} />;
};
```

## 2. Skeleton

![img](./img/Skeleton.gif)

```javascript
import { Skeleton, Circle, Rectangle } from "./components";

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
`;

const App = () => {
  return (
    <Skeleton width="300px" height="200px" animation="blink">
      <Rectangle width="300px" height="200px" />
      <SkelDiv>
        <Circle radius="50px" />
        <div className="text-skel">
          <Rectangle width="240px" height="20px" />
          <Rectangle width="240px" height="20px" />
        </div>
      </SkelDiv>
    </Skeleton>
  );
};
```

## 3. Modal

```javascript
import { Modal } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Modal width="300px" height="400px" background={false} minWidth="300px">
    <App />
  </Modal>
);
```

```javascript
import { useModal } from "./components";

const App = () => {
  const { openModal, closeModal } = useModal({
    width: "200px",
    height: "200px",
    position: { x: "0px", y: "20px" },
  }); // override initial settings

  return (
    <div className="main">
      <button onClick={() => openModal(<p>this is Modal.</p>)}>open</button>
      <button onClick={() => closeModal()}>close</button>
    </div>
  );
};
```

## 4. Accordion

```javascript
import { Accordion } from "./components";

const App = () => {
  return (
    <Accordion title="제목" isCollapsable>
      <div>상세 설명입니다.</div>
    </Accordion>
  );
};
```
