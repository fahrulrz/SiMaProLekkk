import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import "../../styles/style.css";

export default function ResetPassword() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <div className="flex flex-row bg-primary w-3/4 h-1/2 items-center">
        <div className="flex flex-1 w-1/3 h-full bg-primary justify-center items-center p-20 ">
          <img
            src="/image/logo.png"
            alt="Logo SiMaPro"
            className="bg-white h-full w-full flex justify-center items-center text-black"
          />
        </div>
        <form
          action="#"
          method="post"
          className="flex flex-1 h-1/2 flex-col gap-4 justify-center ps-40 pe-40">
          <div className="flex h-1/2 gap-4">
            <div className="flex flex-auto">
              <label htmlFor="username" className="w-full relative flex justify-center items-center">
                <span className="absolute -inset-y-1/4 left-4 flex items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ fontSize: "1.5rem" }}
                    className="text-primary"
                  />
                </span>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  style={{ color: "var(--primary)" }}
                  className="w-full h-1/2 rounded-[5px] placeholder:text-[var(--hint)] placeholder:font-bold placeholder:tracking-wide ps-12 font-bold tracking-wide focus:outline-none"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center h-1/5 gap-5">
            <button
              type="submit"
              className="w-full h-full bg-white text-primary flex justify-center items-center rounded-[15px] font-bold tracking-wide">
              Send
              <FontAwesomeIcon
              icon={faPaperPlane}
              style={{ fontSize: "1.2rem" }}
              className="ms-2"/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
