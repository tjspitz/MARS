import DynamicOne from "./DynamicOne";
import DynamicTwo from "./DynamicTwo";

const components = {
  one: DynamicOne,
  two: DynamicTwo,
};
const DynamicRender = ({ user }) => {
  const SelectUser = components[user];

  return <SelectUser />;
};

export default DynamicRender;