//Week-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const fullName = 'Olga Sessions';

  const hobbies = [
    {
      id: 1,
      title: 'Reading',
    },
    {
      id: 2,
      title: 'Learning new things',
    },
    {
      id: 3,
      title: 'Watching my kid play volleyball',
    },
    {
      id: 4,
      title: 'Exploring new IT skills',
    },
    {
      id: 5,
      title: 'Doing puzzles',
    },
    {
      id: 6,
      title: 'Meeting with friends',
    },
    {
      id: 6,
      title: 'Traveling',
    },
  ];
  return (
    <div>
      {<h1>{fullName}</h1>}
      <h2>About me</h2>
      <h1>React v4 Pilot</h1>
      <p>
        My greatest passion is software engineering, and I’m actively growing my
        skills as I work toward a long term career in tech. I hold a Bachelor’s
        degree in Hospitality, specializing in hotel and restaurant management
        and have worked in across several countries, gaining strong experience
        in customer service, cultural awareness, and solving challenges in fast
        paced environments. Today, I work in logistics, where I continue to
        build adaptability, problem solving skills, and a global perspective. My
        love for travel and discovering new experiences has shaped who I am.
        Curious, open minded, and committed to continuous learning. I’m excited
        to bring this blend of technical training and real world experience into
        my future roles in technology.
      </p>

      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.id}>{hobby.title}</li>
        ))}
      </ul>

      <p> Student output will go here </p>
    </div>
  );
}
