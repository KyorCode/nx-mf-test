type AppProps = {
  text: string;
};

export function App({ text }: AppProps) {
  return <div>{text}</div>;
}

export default App;
