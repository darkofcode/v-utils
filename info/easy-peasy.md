# action listener

```javascript
    // action listener
    onAddCompany: actionOn(
      (actions, storeActions) => {
        return storeActions.company.home.setAddCompany;
      },
      async (state, target) => {

        // console.trace(`action listener run with target`, state);
        const payload = target.payload;
        const preCom = get(state.user, "companies", []);
        state.user.companies = [payload, ...preCom];
      }
    ),
```

## thunk listener

```javascript
    // action listener
    onAddCompany: thunkOn(
      (actions, storeActions) => {
        return storeActions.company.home.setAddCompany;
      },
      async (actions, target) => {
        // console.trace(`action listener run with target`, target);
        const payload = target.payload;
        actions.setAddCompanies(payload);
      }
    ),
```

## advance thunk

```javascript
thHeadAdd: thunk(async (actions, payload, { getState, getStoreState }) => {
  try {
    // access current store state
    const currentPage = getState().currentPage;
    // access global store state
    const userState = getStoreState().user.activeUser;

    actions.setLoading(false);
  } catch (error) {
    actions.setLoading(false);
  }
});

const tcThunk = (fn) =>
  thunk((actions, payload, helper) => {
    return Promise.resolve(fn(actions, payload, helper)).catch((err) => {
      actions.setState(["loading", false]);
    });
  });

const gState = (storePath, resultPath, defaultValue) => (fn) =>
  computed([(_) => 1, (_, gStore) => get(gStore, storePath)], (_, r) => {
    const result = resultPath ? get(r, resultPath, defaultValue) : r;
    return fn ? fn(result) : result;
  });
```
