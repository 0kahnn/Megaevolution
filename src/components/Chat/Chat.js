import talk from "../../assets/icons/talk.png";
import discord from "../../assets/icons/discord.png";
import tick from "../../assets/icons/tick.png";
import mail from "../../assets/icons/mail.png";
import Tabs from "./Tabs";
import "./chat.css";
const Chat_ = () => {
  return (
    <div className="chat-wrapper">
      <Tabs />
      {/* resolution start */}
      <div className="container-fluid main-div ">
        <div className="container">
          <h4>Do you want 1 : 1 Chat with us?</h4>
          <div className="cards-section">
            <div className="row">
              <div className="col-md-6">
                <div className="card card-one">
                  <div className="card-header bg-transparent border-0 text-center">
                    <img src={talk} alt="" />
                    <h4>Kakao Talk</h4>
                  </div>
                  <div className="detail">
                    <ul className="list-unstyled">
                      <li>
                        STEP 01
                        <p>
                          Click the Link and download Kakaotalk from the right
                          top. Create an account.
                        </p>
                      </li>
                      <li>
                        STEP 02
                        <p>
                          Click the above kakao icon or HERE to receive a link
                          to our official channel.
                        </p>
                      </li>
                      <li>
                        STEP 03
                        <p>Add channel and start a chat.</p>
                      </li>
                      <li>
                        STEP 04
                        <p>
                          Send your inquiries in 1 : 1 chat and our team will
                          try to reach you soon.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header bg-transparent border-0 text-center">
                    <img src={discord} alt="" />
                    <h4>Discord</h4>
                  </div>
                  <div className="detail">
                    <ul className="list-unstyled">
                      <li>
                        STEP 01
                        <p>
                          Click the Link and download Kakaotalk from the right
                          top. Create an account.
                        </p>
                      </li>
                      <li>
                        STEP 02
                        <p>
                          Click the above Discord icon or HERE to receive a link
                          to our Discord.
                        </p>
                      </li>
                      <li>
                        STEP 03
                        <p>
                          Go to &lt; <img src={tick} /> Verify &gt; tab and
                          click on <img src={tick} /> mark.
                        </p>
                      </li>
                      <li>
                        STEP 04
                        <p>
                          Go to &lt; <img src={mail} /> Create-a-ticket&gt; tab
                          and create a ticket.
                        </p>
                      </li>
                      <li>
                        STEP 05
                        <p>
                          Type in any inquiries in your ticket tab and our team
                          will try to reach you soon.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat_;
