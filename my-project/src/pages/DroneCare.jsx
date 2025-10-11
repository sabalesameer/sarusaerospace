
import React from "react";
import {
  Battery,
  Drone,
  CloudRain,
  Thermometer,
  ShieldCheck,
  Monitor,
  Map,
  BatteryCharging,
  Package,
  Trash2,
  FileText,
  Wrench
} from "lucide-react";

const droneCareItems = [
  { icon: <Battery size={40} />, text: "Always check the battery level before flying." },
  { icon: <Drone size={40} />, text: "Keep the drone clean and free from dust or mud." },
  { icon: <CloudRain size={40} />, text: "Avoid flying in rain, strong wind, or extreme heat." },
  { icon: <Thermometer size={40} />, text: "Store the drone in a cool, dry place." },
  { icon: <ShieldCheck size={40} />, text: "Check propellers for damage before each flight." },
  { icon: <Monitor size={40} />, text: "Keep firmware and software updated." },
  { icon: <Map size={40} />, text: "Fly only in open, obstacle-free areas." },
  { icon: <BatteryCharging size={40} />, text: "Do not overcharge or fully drain the battery." },
  { icon: <Package size={40} />, text: "Handle the drone gently during transport." },
  { icon: <Trash2 size={40} />, text: "Dispose of damaged batteries safely and as per guidelines." },
  { icon: <FileText size={40} />, text: "Follow local flying rules and safety guidelines." },
  { icon: <Wrench size={40} />, text: "Get the drone serviced after certain use." },
];
function DroneCare() {
  return (
    <div className="bg-[#ababab] min-h-screen flex flex-col items-center py-15 px-4 ">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 mt-10">
        SARUS DRONE CARE
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl">
        {droneCareItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-4">
            <div className="text-gray-900">{item.icon}</div>
            <p className="text-gray-800 text-sm font-semibold md:text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DroneCare