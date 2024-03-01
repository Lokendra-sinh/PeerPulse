

const MentorLogin = () => {
  return (
    <div className="w-full h-screen py-12 lg:py-24 bg-bgYellow">
    <div className="mx-auto px-4 grid max-w-5xl items-center space-y-6 lg:gap-10">
      <div className="space-y-2 text-center">
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
          className="mx-auto w-14 h-14 rounded-lg bg-bgBlue1 p-3 dark:bg-gray-800"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <polyline points="16 11 18 13 22 9"></polyline>
        </svg>
        <h1 className="text-3xl font-bold text-textBlue">Welcome to Peer Tutors</h1>
        <p className="max-w-[600px] mx-auto text-gray-700 dark:text-gray-400">
          Sign in to your account to start your tutoring session
        </p>
      </div>
      <div className="rounded-lg border bg-bgYellow1 text-card-foreground shadow-sm" data-v0-t="card">
        <div className="space-y-1.5 p-6 flex flex-col gap-1">
          <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold text-textBlue">Mentor</h3>
          <p className="text-sm text-muted-foreground text-textBlue">Login as a mentor to manage tutoring sessions</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <label
              className="text-sm text-textBlue font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-bgYellow px-3 py-2 text-sm text-textBlue ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="Enter your email"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm text-textBlue font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-bgYellow px-3 py-2 text-sm text-textBlue ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="password"
              placeholder="Enter your password"
              required
              type="password"
            />
          </div>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 w-full bg-bgBlue1 hover:bg-blue-200 dark:bg-yellow-100 dark:hover:bg-yellow-200">Login</button>
          <div className="flex items-center justify-center gap-1">
            <p className="text-sm text-textBlue">Don't have an account?</p>
            <button className="text-sm underline font-medium text-textBlue hover:text-accent-foreground">Sign up</button>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MentorLogin