import type { AppProps } from "next/app";
import "~/styles/globals.css";

const App: React.VFC<AppProps> = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
