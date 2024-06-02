const tags = [
  {
    id: 0,
    name: "Music",
  },
  {
    id: 1,
    name: "Food",
  },
  {
    id: 2,
    name: "Games",
  },
  {
    id: 0,
    name: "Music",
  },
  {
    id: 1,
    name: "Food",
  },
  {
    id: 2,
    name: "Games",
  },
  {
    id: 0,
    name: "Music",
  },
  {
    id: 1,
    name: "Food",
  },
  {
    id: 2,
    name: "Games",
  },
  {
    id: 0,
    name: "Music",
  },
  {
    id: 1,
    name: "Food",
  },
  {
    id: 2,
    name: "Games",
  },
  {
    id: 0,
    name: "Music",
  },
  {
    id: 1,
    name: "Food",
  },
  {
    id: 2,
    name: "Games",
  },
];
export default function Tag() {
  return (
    <div className="flex flex-row  h-fit p-2 w-full">
      {tags.map((item, idx) => (
        <p className="bg-zinc-500 p-2 rounded-xl mx-3 text-zinc-100" key={idx}>
          {item.name}
        </p>
      ))}
    </div>
  );
}
