const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div>
        {" "}
        <h1 className="text-center text-3xl font-bold mb-8">
          Something Went Wrong!!
        </h1>
        <div className="flex justify-center items-center">
          <img
            className="self-center w-1/2 h-[50%]"
            src="https://i.postimg.cc/fyXRrWKM/oops-404-error-with-broken-robot-concept-illustration-114360-1932.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
