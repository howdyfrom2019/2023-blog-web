'use client'
import { useCallback, useEffect, useState } from "react";

export default function useGlobalSearchBar() {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [, setShiftClickedTime] = useState(0);

  const onCallOpenSearchBar = useCallback((e: KeyboardEvent) => {
    const { code, shiftKey, timeStamp } = e;
    setOpenSearchBar((prev) => {
      if (!prev) return prev;
      return code !== 'Escape';
    })
    if (!shiftKey) return;

    setShiftClickedTime((prevTime) => {
      if (timeStamp - prevTime <= 200) {
        setOpenSearchBar(true);
        return prevTime;
      } else {
        return timeStamp;
      }
    })
  }, []);

  useEffect(() => {
    if (window) {
      window.addEventListener('keydown', onCallOpenSearchBar, false);
    }

    return () => {
      window.removeEventListener('keydown', onCallOpenSearchBar, false);
    }
  }, [onCallOpenSearchBar]);

  return openSearchBar;
}
