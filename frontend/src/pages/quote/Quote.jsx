import "./quote.scss";

const Quote = () => {
  return (
    <div className="quote">
      <div className="container">
        <div className="top">
          <h1>Get a Quote</h1>
          <p>
            You are one step closer to build your perfect product and enhance
            your online presence
          </p>
        </div>
        <div className="bottom">
          <div className="left">
            <h2>What will be the next step?</h2>
            <ul>
              <li>
                <div>
                  <p>1. We will prepare a proposal</p>
                  <span>
                    Required scope, timeline and aproximate price will be
                    included if you provide detailed information about the
                    project.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <p>2. Together we discuss it</p>
                  <span>
                    Let's get acquainted and discuss all the possible variants
                    and options. Google Hangout or Skype usually works great.{" "}
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <p>Let's start building</p>
                  <span>
                    When the contract is signed and all goals are set, we can
                    start the first sprint.
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="right">
            <p>
              Write us a few words about your project and we will prepare a
              proposal for you within{" "}
              <span style={{ fontWeight: "bold" }}>24</span> hours
            </p>
            <form>
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email" />
              <input type="text" placeholder="Your phone" />
              <input type="text" placeholder="Your company" />
              <input type="text" placeholder="Approx. budget" />
              <div className="optional">
                <span>Optional</span>
                <textarea
                  cols="30"
                  rows="8"
                  placeholder="Project details"
                ></textarea>
              </div>
              <label htmlFor="fileUpload">
                <img src="/assets/uploadicon.jpg" alt="" />
                <span>Upload</span>
              </label>
              <input type="file" id="fileUpload" style={{ display: "none" }} />
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
