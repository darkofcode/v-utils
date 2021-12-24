# React State

## reducer

```javascript
type tState = {
  openPost: boolean,
  openCoupon: boolean,
};
type tAction = ["openPost" | "openCoupon", any];
type tReducer = (state: tState, action: tAction) => tState;

const reducer: tReducer = (state, action) => {
  switch (action["0"]) {
    case "openPost":
      return { ...state, openPost: action["1"] };
    case "openCoupon":
      return { ...state, openCoupon: action["1"] };
    default:
      throw new Error();
  }
};
const initState: tState = {
  openPost: false,
  openCoupon: false,
};

export default function LearnState() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <>
      <Button onClick={() => dispatch(["openPost", true])} variant="contained">
        add post
      </Button>
    </>
  );
}
```
