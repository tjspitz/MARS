// 11/9/23
import ChildThree from "./ChildThree";

const ChildTwo = (props) => {
  return (
    <div>
      <h3>Hello from Child Two...</h3>
      <ChildThree />
    </div>
  );
};

export default ChildTwo;