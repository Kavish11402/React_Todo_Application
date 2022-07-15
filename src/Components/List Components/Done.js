export default function Done({todoStatus})
{
    let status = "Not Done Yet"
    if (todoStatus)
        status = "Task is Completed"
  return(
      <div className="flex mb-5 text-lg">
          <h2 className=" font-bold">Done:</h2>
          <p className="ml-4">
              {status}
          </p>
      </div>
  );
}