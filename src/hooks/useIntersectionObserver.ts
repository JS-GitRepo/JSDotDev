import { useEffect, useMemo, useState } from "react";

export const useIntersectionObserver = (
  ref: React.MutableRefObject<any>,
  observerOptions: IntersectionObserverInit = {
    threshold: 0,
    root: null,
    rootMargin: "0%",
  },
  pauseAfterVisible: boolean
) => {
  const [resultEntry, setResultEntry] = useState<IntersectionObserverEntry>();
  const [frozen, setFrozen] = useState(false);

  const IOCallback = ([entry]: IntersectionObserverEntry[]) =>
    setResultEntry(entry);
  if (resultEntry?.isIntersecting && pauseAfterVisible) {
    setFrozen(true);
  }

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => IOCallback([entry]),
        observerOptions
      ),
    []
  );

  useEffect(() => {
    const element = ref?.current;
    if (frozen || !element) {
      return;
    } else {
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [
    ref,
    observer,
    ref?.current,
    observerOptions.root,
    observerOptions.rootMargin,
    frozen,
    JSON.stringify(observerOptions.threshold),
  ]);

  return resultEntry;
};
