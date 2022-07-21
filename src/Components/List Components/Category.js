export default function Category({todoCategory})
{
  return(
      <div className="flex mb-10  text-2xl">
          {/*<h2 className="">Category:</h2>*/}
          <p>{todoCategory}</p>
      </div>
  );
}