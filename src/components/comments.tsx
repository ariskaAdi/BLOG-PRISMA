const Comments = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <ul>
        <li className="shadow mb-4 p-2 bg-slate-300 rounded-md">
          <div className="flex items-center mb-2">
            <div className="text-blue-500 font-bold mr-2">jhon doe</div>
            <div className="text-gray-500">10 minutes ago</div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
      </ul>
    </div>
  );
};

export default Comments;
