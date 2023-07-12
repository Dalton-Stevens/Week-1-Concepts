const Child = (props) => {
  console.log(props);
  return <div className="name-box">{props.name}</div>;
};

export default Child;
