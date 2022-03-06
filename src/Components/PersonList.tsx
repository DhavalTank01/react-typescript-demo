type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <>
      {props.names.map((cele, idx) => {
        return (
          <p key={idx}>
            {cele.first} {cele.last}
          </p>
        );
      })}
    </>
  );
};

export default PersonList;
