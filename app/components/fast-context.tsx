import { createContext, useCallback, useContext, useRef, useSyncExternalStore } from "react";

export function createFastContext<Store>(initialState: Store) {
  function useStoreData(): {
    get: () => Store;
    set: (value: Partial<Store>) => void;
    subscribe: (cb: () => void) => () => void;
  } {
    const store = useRef(initialState);

    const get = useCallback(() => store.current, []);

    const subscribers = useRef<Set<() => void>>(new Set());

    const subscribe = useCallback((cb: () => void) => {
      subscribers.current.add(cb);
      return () => subscribers.current.delete(cb);
    }, []);

    const set = useCallback((value: Partial<Store>) => {
      store.current = { ...store.current, ...value };
      subscribers.current.forEach((cb) => cb());
    }, []);

    return {
      get,
      set,
      subscribe,
    };
  }

  type StoreReturnType = ReturnType<typeof useStoreData>;

  const StoreContext = createContext<StoreReturnType | null>(null);

  function Provider({ children }: { children: React.ReactNode }) {
    return <StoreContext.Provider value={useStoreData()}>{children}</StoreContext.Provider>;
  }

  function useStore<Selector>(selector: (store: Store) => Selector): [Selector, (value: Partial<Store>) => void] {
    const store = useContext(StoreContext);

    if (!store) throw new Error("store not found");

    const state = useSyncExternalStore(
      store.subscribe,
      () => selector(store.get()),
      () => selector(store.get()),
    );

    return [state, store.set];
  }

  return { Provider, useStore };
}
