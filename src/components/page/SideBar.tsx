import SideBarOptions from "./SideBarOptions";

const options = [
  {
    id: 1,
    name: "Home",
    icon: "Home",
  },
  {
    id: 2,
    name: "Shorts",
    icon: "Shorts",
  },
  {
    name: "Subscription",
    icon: "Subscription",
  },
];

const options2 = [
  {
    id: 1,
    name: "Home",
    icon: "Home",
  },
  {
    id: 2,
    name: "Shorts",
    icon: "Shorts",
  },
  {
    name: "Subscription",
    icon: "Subscription",
  },
];

const options3 = [
  {
    id: 1,
    name: "Home",
    icon: "Home",
  },
  {
    id: 2,
    name: "Shorts",
    icon: "Shorts",
  },
  {
    name: "Subscription",
    icon: "Subscription",
  },
];

export default function SideBar() {
  return (
    <div className="flex flex-col w-24 gap-2">
      {options.map((names, idx) => (
        <SideBarOptions
          key={idx}
          names={names.name}
          className={idx === 0 ? "bg-zinc-700" : ""}
        />
      ))}
      <div className="h-1 w-full bg bg-zinc-700"></div>
      {/*line*/}
      {options2.map((names, idx) => (
        <SideBarOptions
          key={idx}
          names={names.name}
          //   className={idx === 0 ? "bg-zinc-700" : ""}
        />
      ))}
      <div className="h-1 w-full bg bg-zinc-700"></div>
      {/*line*/}
      {options3.map((names, idx) => (
        <SideBarOptions
          key={idx}
          names={names.name}
          //   className={idx === 0 ? "bg-zinc-700" : ""}
        />
      ))}
    </div>
  );
}
