export default function Date({todoDate})
{
  return(
      <div className="flex mb-5 text-lg">
          <h2 className=" font-bold">DateTime:</h2>
          <p className="ml-4">{todoDate}</p>
      </div>
  );
}