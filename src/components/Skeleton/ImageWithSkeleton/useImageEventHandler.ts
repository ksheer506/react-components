import { SyntheticEvent, useCallback, useState } from "react";

export const useImageEventHandler = (fallbackImage: string) => {
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const onError = useCallback(
    (e: SyntheticEvent<HTMLImageElement>) => {
      e.currentTarget.src = fallbackImage;
    },
    [fallbackImage]
  );

  return { isLoading, onLoad, onError };
};