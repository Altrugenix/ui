/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, useCallback, useRef } from "react";

export interface useInfiniteScrollOptions<T> {
  fetchData: (page: number) => Promise<T[]>;
  initialPage?: number;
  pageSize?: number;
}

export function useInfiniteScroll<T>({
  fetchData,
  initialPage = 1,
}: useInfiniteScrollOptions<T>) {
  const [items, setItems] = useState<T[]>([]);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newItems = await fetchData(page);
      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setItems((prev) => [...prev, ...newItems]);
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch data"));
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore, fetchData]);

  // Initial load
  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      loadMore();
    }
    return () => {
      ignore = true;
    };
  }, [loadMore]);

  return { items, loading, hasMore, loadMore, error };
}

// Helper component for observer
export interface InfiniteScrollObserverProps {
  onIntersect: () => void;
  rootMargin?: string;
  enabled?: boolean;
}

export const InfiniteScrollObserver = ({
  onIntersect,
  rootMargin = "100px",
  enabled = true,
}: InfiniteScrollObserverProps) => {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { rootMargin }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, [onIntersect, rootMargin, enabled]);

  return (
    <div
      ref={triggerRef}
      className="flex h-10 w-full items-center justify-center"
    />
  );
};
