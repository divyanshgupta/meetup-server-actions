import ClientButton from "./ClientButton";


export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Good Byee !!!</h1>

      <ul>
        <li>
          See you soon , thanks for joining
        </li>
      </ul>

      <div className="flex gap-2">
        <br></br>
      <form className="grid gap-4">
        
        <ClientButton/>
     
      </form>
      

      </div>
    </div>
  );
}
