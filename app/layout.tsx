import "./globals.css";
import Sidebar from "./Components/layout/Sidebar";
import FollowBar from "@/app/Components/layout/FollowBar";
import LoginModal from "@/app/modals/LoginModal";
import RegisterModal from "@/app/modals/RegisterModal";
import {Toaster} from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen bg-black">
      <Toaster/>
      <RegisterModal/>
      <LoginModal/>
        <div className="container h-full mx-auto xl:px-30 max-w-6xl">
          <div className="grid grid-cols-4 h-full">
            <Sidebar/>
            <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
              {children}
            </div>
            <FollowBar/>
          </div>
        </div>
      </body>
    </html>
  );
}
