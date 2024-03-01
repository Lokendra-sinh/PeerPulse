import { useNavigate } from "react-router-dom";


const Homepage = () => {

    const navigate = useNavigate();

    function handleMentorLogin() {
        navigate('/mentor/login');
    }

    function handleStudentLogin() {
        navigate('/student/login');
    }



  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-2 bg-bgYellow">
      <p className="text-xl text-center font-bold text-textBlue">
        Welcome to your peer tutoring
      </p>
      <h1 className="text-5xl font-bold text-center text-textBlue">
        PeerPulse
      </h1>
      <p className="text-center text-textBlue pt-10">Login as a ...</p>

      <div className="space-y-4">
        <button onClick={handleMentorLogin} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-bgBlue1 text-primary-foreground hover:bg-bgBlue2 h-11 rounded-md px-8 w-full">
          <div className="flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-6 h-6"
            >
              <path d="m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"></path>
              <path d="m5 8 4 4"></path>
              <path d="m12 15 4 4"></path>
            </svg>
            Mentor
          </div>
        </button>
        <button onClick={handleStudentLogin} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-bgBlue1 text-primary-foreground hover:bg-bgBlue2 h-11 rounded-md px-8 w-full">
          <div className="flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-6 h-6"
            >
              <path d="m4 6 8-4 8 4"></path>
              <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"></path>
              <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"></path>
              <path d="M18 5v17"></path>
              <path d="M6 5v17"></path>
              <circle cx="12" cy="9" r="2"></circle>
            </svg>
            Student
          </div>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
