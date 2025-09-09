import { useEffect } from "react";

export function useTitleDocument(text: string) {
  // useEffect
  useEffect(() => {
    document.title = text;
  }, []);
}
