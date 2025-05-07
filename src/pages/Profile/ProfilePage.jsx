import React from "react";
import { FaUser, FaCog, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

export default function ProfilePage() {
  const profile = {
    name: "John Brevis",
    email: "johnbrevis@gmail.com",
    dob: "6/6/2000",
    gender: "Male",
    passport: "PWI909274",
    address: "Loremipsum loreipsum",
    pincode: "620102",
    profileImg: "/assets/profile.jpg",
  };

  return (
    <div className="h-screen w-full flex font-poppins max-w-7xl mx-auto ">
      {/* Left Sidebar */}
      <div className="w-1/2 px-6 py-8">
        <div className="flex items-center gap-4 mb-8">
          <img
            src={profile.profileImg}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold uppercase">
              Hi, {profile.name}
            </h2>
            <p className="text-gray-600 text-sm">{profile.email}</p>
          </div>
        </div>

        {/* Offer Box */}
        <div className="p-4 rounded-lg bg-[#ffe9e3] mb-6">
          <p className="text-sm font-medium mb-1">
            Get trip inspiration and offers
          </p>
          <p className="text-xs text-gray-600">
            Receive deals, tips, and insights from Expedia
          </p>
          <button className="mt-3 px-4 py-1 bg-[#ff5a3c] text-white text-sm rounded-md">
            Get now
          </button>
        </div>

        {/* Navigation */}
        <div className="space-y-3 text-sm">
          <NavItem icon={<FaUser />} label="Profile" active />
          <NavItem icon={<FaCog />} label="Security & Settings" />
          <NavItem icon={<FaQuestionCircle />} label="Help & feedback" />
          <NavItem icon={<FaSignOutAlt />} label="Logout" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 w-1/2 flex items-start justify-center py-10 ">
        <div className="w-full bg-white rounded-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 rounded-t-2xl bg-[#ffe9e3]">
            <h2 className="text-xl font-bold font-jakarta">Profile</h2>
            <button className="text-xl">✏️</button>
          </div>

          {/* Profile Details with Dividers */}
          <div className="divide-y divide-gray-200">
            <Detail label="Full name" value={profile.name} />
            <Detail label="DOB" value={profile.dob} />
            <Detail label="Gender" value={profile.gender} />
            <Detail label="Passport no" value={profile.passport} />
            <Detail label="Full Address" value={profile.address} />
            <Detail label="Pincode" value={profile.pincode} />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 rounded-md ${
        active
          ? "text-[#ff5a3c] font-medium border border-[#ff5a3c]"
          : "text-gray-400 bg-[#f5f5f5]"
      }`}
    >
      <span className="flex items-center gap-2">
        {icon} {label}
      </span>
      <span>›</span>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="px-6 py-5">
      <p className="text-sm text-gray-500 font-jakarta">{label}</p>
      <p className="text-base font-lato font-semibold">{value}</p>
    </div>
  );
}
