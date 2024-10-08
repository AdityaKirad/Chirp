import { useFormAction, useNavigation } from "@remix-run/react";
import { type RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void) {
  useEffect(() => {
    const controller = new AbortController();

    function listener(event: Event) {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event);
    }

    document.addEventListener("mousedown", listener, { signal: controller.signal });
    document.addEventListener("touchstart", listener, { signal: controller.signal });

    return () => controller.abort();
  }, [ref, handler]);
}

function useIsPending({
  formAction,
  formMethod = "POST",
  state = "non-idle",
}: {
  formAction?: string;
  formMethod?: "POST" | "GET" | "PUT" | "PATCH" | "DELETE";
  state?: "submitting" | "loading" | "non-idle";
} = {}) {
  const contextualFormAction = useFormAction();
  const navigation = useNavigation();
  const isPendingState = state === "non-idle" ? navigation.state !== "idle" : navigation.state === state;
  return (
    isPendingState &&
    navigation.formAction === (formAction ?? contextualFormAction) &&
    navigation.formMethod === formMethod
  );
}

export { useOnClickOutside, useIsPending };
