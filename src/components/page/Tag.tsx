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
    id: 3,
    name: "Subscription",
    icon: "Subscription",
  },
];

export default function Ta() {
  return (
    <div className="flex flex-row w-24 gap-2">
      {options.map((names, idx) => (
        <Tag
          key={idx}
          names={names.name}
          className={idx === 0 ? "bg-zinc-700" : ""}
        />
      ))}
    </div>
  );
}

function Tag({ names, className }: any) {
  return (
    <div className={`flex flex-row px-5 py-2 rounded-xl ${className}`}>
      <p className=" text-zinc-100">{names}</p>
    </div>
  );
}
