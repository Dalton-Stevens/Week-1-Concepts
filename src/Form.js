const Form = (props) => {
  return (
    <form>
      <input
        onChange={(e) => props.setNames([...props.names, e.target.value])}
      />
      {/* <button>Add name</button> */}
    </form>
  );
};

export default Form;
