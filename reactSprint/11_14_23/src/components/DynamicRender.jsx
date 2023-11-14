import SuccessPage from './SuccessPage';
import FailPage from './FailPage';
import PendingPage from './PendingPage';

const components = {
  pass: SuccessPage,
  fail: FailPage,
  pending: PendingPage,
};
const DynamicRender = ({ status }) => {
  const SelectUser = components[status];

  return <SelectUser />;
};

export default DynamicRender;
