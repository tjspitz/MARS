// 11/9/23
import ChildTwo from "./ChildTwo";

const ChildOne = (props) => {
  return (
    <div>
      <h2>Hello from Child One...</h2>
      <ChildTwo />
    </div>
  );
};

export default ChildOne;