import Chat_ from "../../components/Chat/Chat";
import Layout from "../../components/Common/Layout";
import Spacer from "../../components/Helper/Spacer";

const Chat = () => {
  return (
    <>
      <Layout>
        <Spacer height="1" />
        <Chat_ />
        <Spacer height="5" />
      </Layout>
    </>
  );
};
export default Chat;
