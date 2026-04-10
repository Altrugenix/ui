import { MutableRefObject, Ref, useCallback } from "react";

export function useCombinedRefs<T>(
  ...refs: (Ref<T> | undefined)[]
): (node: T | null) => void {
  return useCallback((node: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(node);
      } else {
        (ref as MutableRefObject<T | null>).current = node;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}
