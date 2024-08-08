import React from "react";

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Explorer</h1>
      
      <p className="mb-4 mt-4 text-2xl font-light">
        Welcome to GitHub Explorer, your ultimate tool for discovering and
        exploring GitHub users! Built with ReactJS, this intuitive and
        user-friendly platform allows you to search for any GitHub user
        effortlessly.
      </p>

      <div>
        <p className="mb-2 mt-10 text-3xl font-light">
          With GitHub Explorer, you can:
        </p>
        <ul className="mb-4 text-2xl font-light">
          <li>
            <span className="custom-dot mb-1 ml-4"></span>Search Users: Simply
            enter a GitHub username in the search bar to find any user.
          </li>
          <li>
            <span className="custom-dot mb-1 ml-4"></span>
            View Profiles: Get a comprehensive view of the user's profile,
            including their display picture and name.
          </li>
          <li>
            <span className="custom-dot mb-1 ml-4"></span>
            Explore Repositories: Browse through the user's public repositories
            to see their projects and contributions.
          </li>
        </ul>
      </div>

      <p className="mb-4 mt-9 text-2xl font-light">
        GitHub Explorer is designed to make navigating GitHub more accessible
        and enjoyable, whether you're a developer looking for inspiration, a
        recruiter seeking potential candidates, or simply curious about the
        projects of others in the GitHub community. Dive in and start exploring
        the vast world of GitHub users today!
      </p>

      <p className="text-lg mt-6 text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By: <span className="text-white">Adarsh Ghodke</span>
      </p>
    </div>
  );
}

export default About;
