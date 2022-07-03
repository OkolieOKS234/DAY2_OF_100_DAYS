// Create an object that has details of a game and system requirements
// and make sure when a function is ran it adds a new game to the array object
// It should have:
// 1. Name of game
// 2. Min PC requirements
// 3. Max PC requirements
// 4.

let pcGames = [
  {
    name: "GTA IV",
    sysSpecs: {
      operatingSystem: "Windows 7/8.1/10",
      RAM: "2GB RAM",
      DirectX: "Version 10",
      Graphics: "Nvidia Geforce GT 640/AMD Radeon",
    },
  },
];

const addGamesAndSpecs = () => {
  let newGames = [
    ...pcGames,
    {
      name: "Fifa 2019",
      sysSpecs: {
        operatingSystem: "Windows 7/8/8.1/10",
        RAM: " 8GB",
        DirectX: "Version 10",
        Graphics: "Nvidia Geforce GT 640/AMD Radeon",
      },
    },
  ];

  console.table(
    `Here is your full list of games that have been added to the list,
    It contains the full description👇
    ${JSON.stringify(newGames, null, 5)}`
  );
};
addGamesAndSpecs();
