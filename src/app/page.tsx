import Link from "next/link";

export default function Home() {
  return (
    <div className="w-1/1 h-screen flex items-center justify-center">
      <div className="w-[500px] max-md:w-[300px] text-white bg-[rgba(92,109,216,0.5)] shadow-2xl pl-[30px] pr-[30px] pt-[50px] pb-[50px] flex flex-col gap-5 rounded-2xl">
        <h1 className="font-bold  max-md:text-[20px]">
          Welcome to the ChatWheel.io
        </h1>
        <p className="text-[18px]">
          Hello.Your account is noth authorized.If you have account{" "}
          <Link href={"/login"}>log in.</Link>If you haven`t account{" "}
          <Link href={"/signup"}>sign up.</Link>
        </p>
      </div>
    </div>
  );
}
