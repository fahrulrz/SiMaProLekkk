import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <div className="flex flex-row bg-primary w-3/4 h-1/2 items-center">
        <div className="flex flex-1 w-1/3 h-full bg-primary justify-center items-center p-20 ">
          <img
            src="#"
            alt="Logo SiMaPro"
            className="bg-white h-full w-full flex justify-center items-center text-black"
          />
        </div>
        <form
          action="#"
          method="post"
          className="flex flex-1 h-1/2 flex-col gap-4 justify-center ps-52 pe-52">
          <div className="flex flex-col h-1/2 gap-4 justify-center ">
            <div className="flex flex-auto">
              <label htmlFor="username" className="w-full">
                <span>
                  {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
                </span>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  className="w-full h-full rounded-[5px] placeholder:text-[#92c7cfa1] placeholder:font-bold placeholder:tracking-wide ps-5"
                />
              </label>
            </div>
            <div className="flex flex-auto">
              <label htmlFor="password" className="w-full">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full h-full rounded-[5px] placeholder:text-[#92c7cfa1] placeholder:font-bold placeholder:tracking-wide ps-5"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center h-1/5 gap-5">
            <button
              type="submit"
              className="bg-white h-full text-primary w-1/2 flex flex-1 justify-center items-center rounded-[20px] font-bold tracking-wide">
              Sign in with Google
            </button>
            <button
              type="submit"
              className="w-1/2 h-full bg-white text-primary flex flex-1 justify-center items-center rounded-[20px] font-bold tracking-wide">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
