export default function Title({todoTitle})
{
  return(
      <div className="flex mb-5 text-lg">
        <h2 className=" font-bold">Title:</h2>
          <p className="ml-4">{todoTitle}</p>
      </div>
  );
}