export function sequence(items, consumer) {
  const results = [];
  const runner = () => {
    const item = items.shift();
    if (item) {
      return consumer(item)
        .then((result) => {
          results.push(result);
        })
        .then(runner);
    }

    return Promise.resolve(results);
  };

  return runner();
}

export function fetchInitialState(store, components, params) {
  const initialStateActions = components ? components.reduce((prev, current) => {
    if (!current) {
      return prev;
    }
    return (current.initialStateActions || [])
      .concat((current.WrappedComponent && (current.WrappedComponent.initialStateActions !== current.initialStateActions) ?
        current.WrappedComponent.initialStateActions : []) || [])
      .concat(prev);
  }, []) : [];

  return sequence(initialStateActions, action => store.dispatch(action(params, store.getState())));
}
