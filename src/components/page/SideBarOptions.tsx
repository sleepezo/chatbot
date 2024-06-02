export default function SideBarOptions({ names, className }: any) {
  return (
    <div className={`flex flex-row px-5 py-2 rounded-xl ${className}`}>
      <p className=" text-zinc-100">{names}</p>
    </div>
  );
}
