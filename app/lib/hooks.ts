import { type Profile, profile as profileSchema } from "./schema";
import { type RefObject, useEffect, useState } from "react";

type Event = MouseEvent | TouchEvent;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void) {
  useEffect(() => {
    function listener(event: Event) {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

function useMultiStepForm<T>(cb: (state: Profile) => T) {
  const [profile, profileSet] = useState<Profile>({ name: "", email: "" });
  const selected = cb(profile);

  const handleChange = (val: Partial<Profile>) => profileSet((prevState) => ({ ...prevState, ...val }));

  return { profile, selected, handleChange };
}

export { useOnClickOutside, useMultiStepForm };
