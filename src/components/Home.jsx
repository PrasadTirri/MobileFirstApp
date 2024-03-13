import React, { useState, useEffect } from "react";

const Home = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch(
          "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&amount=100"
        );
        const data = await response.json();
        if (data.error === false) {
          setJokes(data.jokes);
        } else {
          console.error("Error fetching jokes:", data.message);
        }
      } catch (error) {
        console.error("Error fetching jokes:", error);
      }
    };

    fetchJokes();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center text-success my-3">Jokes</h1>
      <div className="table-responsive p-2 rounded shadow">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Category</th>
              <th>Type</th>
              <th>Joke</th>
            </tr>
          </thead>
          <tbody>
            {jokes.map((joke, index) => (
              <tr key={index}>
                <td>{joke.category}</td>
                <td>{joke.type}</td>
                <td>{joke.joke}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
