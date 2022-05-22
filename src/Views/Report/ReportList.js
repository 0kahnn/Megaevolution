import Layout from "../../components/Common/Layout";
import Spacer from "../../components/Helper/Spacer";
import ReportList_ from "../../components/Report/ReportList";

const ReportList = () => {
  return (
    <>
      <Layout>
        <Spacer height="1" />
        <ReportList_ />
        <Spacer height="5" />
      </Layout>
    </>
  );
};
export default ReportList;
