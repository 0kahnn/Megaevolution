import Layout from "../../components/Common/Layout";
import Spacer from "../../components/Helper/Spacer";
import MyReports from "../../components/Report/MyReports";

const Report = () => {
  return (
    <>
      <Layout>
        <Spacer height="1" />
        <MyReports />
        <Spacer height="5" />
      </Layout>
    </>
  );
};
export default Report;
