import Link from "next/link";
import DescriptionReg from "./DescriptionReg";

export default function SignUp() {
  return (
    <form
      action=""
      className="bg-[rgba(92,109,216,0.5)] text-white  shadow-2xl rounded-[10px] flex gap-10 ">
      <div className="flex flex-col justify-between pl-[50px] pr-[50px] pt-[20px] pb-[20px]">
        <div className="flex flex-col gap-5">
          <h2 className="text-center">Sign Up</h2>
          <label htmlFor="name">
            <p>Name</p>
            <input type="text" name="name" />
          </label>
          <label htmlFor="email">
            <p>Email</p>
            <input type="email" name="email" />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input type="password" name="password" />
          </label>
          <p>
            If you have account <Link href={"/login"}>log in.</Link>
          </p>
        </div>
        <button
          type="submit"
          className="cursor-pointer mt-[20px] hover:bg-blue-400 bg-blue-500 rounded-[10px] h-[40px] shadow-2xl">
          Sign Up
        </button>
      </div>
      <DescriptionReg />
    </form>
  );
}
