export default function Category({todoCategory})
{
  return(
      <div className="flex mb-5 text-lg">
          <h2 className=" font-bold">Category:</h2>
          <p className="ml-4">{todoCategory}</p>
      </div>
  );
}