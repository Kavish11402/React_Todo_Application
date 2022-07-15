export default function Description({todoDesc})
{
  return(
      <div className="flex mb-5 text-lg">
          <h2 className=" font-bold">Description:</h2>
          <p className="ml-4">{todoDesc}</p>
      </div>
  );
}