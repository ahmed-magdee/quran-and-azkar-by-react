import { useEffect } from "react";

export default function TitleDocument(text: string) {
  // useEffect
  useEffect(() => {
    document.title = text;
  }, []);
}
