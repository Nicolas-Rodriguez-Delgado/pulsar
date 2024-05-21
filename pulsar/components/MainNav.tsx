import Link from "next/link";
import React from "react";

const MainNav = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
      </div>
      <div>
        <Link href="/">Logout</Link>
      </div>
    </div>
  );
};

export default MainNav;
