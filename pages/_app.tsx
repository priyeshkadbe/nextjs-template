import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToDoListProvider } from "../provider/ToDoListProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToDoListProvider>
      <Component {...pageProps} />
    </ToDoListProvider>
  );
}
