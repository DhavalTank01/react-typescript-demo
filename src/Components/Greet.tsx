type AppProps = {
  name?: string;
  messageCount?: number;
  isLogging?: boolean;
};

const Greet = (Props: AppProps) => {
  return (
    <>
      {Props.isLogging ? (
        <h1>
          Welcome {Props.name} , You have new {Props.messageCount} messages.
        </h1>
      ) : (
        <h1>Welcome Guest</h1>
      )}
    </>
  );
};

export default Greet;
