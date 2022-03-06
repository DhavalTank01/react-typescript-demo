// children props
type HeadingProps = {
  children: string;
};

const Heading = (props: HeadingProps) => {
  return <h3>{props.children}</h3>;
};

export default Heading;
