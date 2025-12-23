const questions = [
  {
    "genre": "Movies & Series",
    "difficulty": "Easy",
    "option_1": "Stranger Things",
    "option_2": "Wednesday",
    "answer": "Stranger Things"
  },
  {
    "genre": "Movies & Series",
    "difficulty": "Easy",
    "option_1": "Money Heist",
    "option_2": "Lupin",
    "answer": "Money Heist"
  },
  {
    "genre": "Movies & Series",
    "difficulty": "Easy",
    "option_1": "Squid Game",
    "option_2": "All of Us Are Dead",
    "answer": "Squid Game"
  },
  {
    "genre": "Movies & Series",
    "difficulty": "Easy",
    "option_1": "Avatar: The Way of Water",
    "option_2": "Oppenheimer",
    "answer": "Oppenheimer"
  },
  {
    "genre": "Movies & Series",
    "difficulty": "Easy",
    "option_1": "Jawan",
    "option_2": "Pathaan",
    "answer": "Pathaan"
  },
  {
    "genre": "Movies & Series",
    "difficulty": "Easy",
    "option_1": "Avengers: Endgame",
    "option_2": "Justice League",
    "answer": "Avengers: Endgame"
  },
  {
    "genre": "Movies & Series",
    "difficulty": "Easy",
    "option_1": "Breaking Bad",
    "option_2": "Better Call Saul",
    "answer": "Breaking Bad"
  },
  {
    "genre": "Movies & Series",
    "difficulty": "Easy",
    "option_1": "Barbie",
    "option_2": "Dune",
    "answer": "Barbie"
  },
  {
    "genre": "Movies & Series",
    "difficulty": "Easy",
    "option_1": "Naruto",
    "option_2": "One Piece",
    "answer": "One Piece"
  },
  {
    "genre": "Movies & Series",
    "difficulty": "Easy",
    "option_1": "Friends",
    "option_2": "How I Met Your Mother",
    "answer": "Friends"
  },

  {
    "genre": "Music",
    "difficulty": "Easy",
    "option_1": "Taylor Swift",
    "option_2": "Ariana Grande",
    "answer": "Taylor Swift"
  },
  {
    "genre": "Music",
    "difficulty": "Easy",
    "option_1": "BTS",
    "option_2": "BLACKPINK",
    "answer": "BTS"
  },
  {
    "genre": "Music",
    "difficulty": "Easy",
    "option_1": "Drake",
    "option_2": "Kanye West",
    "answer": "Drake"
  },
  {
    "genre": "Music",
    "difficulty": "Easy",
    "option_1": "Bad Bunny",
    "option_2": "J Balvin",
    "answer": "Bad Bunny"
  },
  {
    "genre": "Music",
    "difficulty": "Easy",
    "option_1": "Arijit Singh",
    "option_2": "Atif Aslam",
    "answer": "Arijit Singh"
  },
  {
    "genre": "Music",
    "difficulty": "Easy",
    "option_1": "Spotify",
    "option_2": "Apple Music",
    "answer": "Spotify"
  },
  {
    "genre": "Music",
    "difficulty": "Easy",
    "option_1": "Billie Eilish",
    "option_2": "Olivia Rodrigo",
    "answer": "Billie Eilish"
  },
  {
    "genre": "Music",
    "difficulty": "Easy",
    "option_1": "Ed Sheeran",
    "option_2": "Justin Bieber",
    "answer": "Ed Sheeran"
  },
  {
    "genre": "Music",
    "difficulty": "Easy",
    "option_1": "Coldplay",
    "option_2": "Imagine Dragons",
    "answer": "Coldplay"
  },
  {
    "genre": "Music",
    "difficulty": "Easy",
    "option_1": "YouTube Music",
    "option_2": "Amazon Music",
    "answer": "YouTube Music"
  },

  {
    "genre": "Sports",
    "difficulty": "Easy",
    "option_1": "IPL",
    "option_2": "ICC Cricket World Cup",
    "answer": "IPL"
  },
  {
    "genre": "Sports",
    "difficulty": "Easy",
    "option_1": "Virat Kohli",
    "option_2": "Rohit Sharma",
    "answer": "Virat Kohli"
  },
  {
    "genre": "Sports",
    "difficulty": "Easy",
    "option_1": "India vs Pakistan cricket",
    "option_2": "India vs Australia cricket",
    "answer": "India vs Pakistan cricket"
  },
  {
    "genre": "Sports",
    "difficulty": "Easy",
    "option_1": "FIFA World Cup",
    "option_2": "UEFA Champions League",
    "answer": "FIFA World Cup"
  },
  {
    "genre": "Sports",
    "difficulty": "Easy",
    "option_1": "Messi",
    "option_2": "Ronaldo",
    "answer": "Messi"
  },
  {
    "genre": "Sports",
    "difficulty": "Easy",
    "option_1": "Pro Kabaddi League",
    "option_2": "ISL",
    "answer": "ISL"
  },
  {
    "genre": "Sports",
    "difficulty": "Easy",
    "option_1": "Cricket",
    "option_2": "Football",
    "answer": "Football"
  },
  {
    "genre": "Sports",
    "difficulty": "Easy",
    "option_1": "Olympics",
    "option_2": "Commonwealth Games",
    "answer": "Olympics"
  },
  {
    "genre": "Sports",
    "difficulty": "Easy",
    "option_1": "Badminton",
    "option_2": "Tennis",
    "answer": "Tennis"
  },
  {
    "genre": "Sports",
    "difficulty": "Easy",
    "option_1": "Formula 1",
    "option_2": "MotoGP",
    "answer": "Formula 1"
  },

  {
    "genre": "Sports",
    "difficulty": "Moderate",
    "option_1": "IPL 2025",
    "option_2": "IPL 2024",
    "answer": "IPL 2024"
  },
  {
    "genre": "Sports",
    "difficulty": "Moderate",
    "option_1": "Asia Cup",
    "option_2": "Champions Trophy",
    "answer": "Asia Cup"
  },
  {
    "genre": "Sports",
    "difficulty": "Moderate",
    "option_1": "Women’s Cricket World Cup",
    "option_2": "Men’s Cricket World Cup",
    "answer": "Men’s Cricket World Cup"
  },
  {
    "genre": "Sports",
    "difficulty": "Moderate",
    "option_1": "India vs England cricket",
    "option_2": "India vs South Africa cricket",
    "answer": "India vs England cricket"
  },
  {
    "genre": "Sports",
    "difficulty": "Moderate",
    "option_1": "NBA",
    "option_2": "NFL",
    "answer": "NBA"
  },
  {
    "genre": "Sports",
    "difficulty": "Moderate",
    "option_1": "Real Madrid",
    "option_2": "Barcelona",
    "answer": "Real Madrid"
  },
  {
    "genre": "Sports",
    "difficulty": "Moderate",
    "option_1": "Manchester City",
    "option_2": "Manchester United",
    "answer": "Manchester United"
  },
  {
    "genre": "Sports",
    "difficulty": "Moderate",
    "option_1": "Wimbledon",
    "option_2": "US Open",
    "answer": "Wimbledon"
  },
  {
    "genre": "Sports",
    "difficulty": "Moderate",
    "option_1": "French Open",
    "option_2": "Australian Open",
    "answer": "French Open"
  },
  {
    "genre": "Sports",
    "difficulty": "Moderate",
    "option_1": "Cricket highlights",
    "option_2": "Football highlights",
    "answer": "Football highlights"
  },

  {
    "genre": "Sports",
    "difficulty": "Hard",
    "option_1": "T20 World Cup",
    "option_2": "ODI World Cup",
    "answer": "T20 World Cup"
  },
  {
    "genre": "Sports",
    "difficulty": "Hard",
    "option_1": "IPL auction",
    "option_2": "IPL final",
    "answer": "IPL auction"
  },
  {
    "genre": "Sports",
    "difficulty": "Hard",
    "option_1": "Cricket live score",
    "option_2": "Cricket schedule",
    "answer": "Cricket live score"
  },
  {
    "genre": "Sports",
    "difficulty": "Hard",
    "option_1": "Football transfer news",
    "option_2": "Match fixtures",
    "answer": "Football transfer news"
  },
  {
    "genre": "Sports",
    "difficulty": "Hard",
    "option_1": "Sports news",
    "option_2": "Live sports",
    "answer": "Live sports"
  },
  {
    "genre": "Sports",
    "difficulty": "Hard",
    "option_1": "Fantasy cricket",
    "option_2": "Fantasy football",
    "answer": "Fantasy cricket"
  },
  {
    "genre": "Sports",
    "difficulty": "Hard",
    "option_1": "Kabaddi",
    "option_2": "Hockey",
    "answer": "Hockey"
  },
  {
    "genre": "Sports",
    "difficulty": "Hard",
    "option_1": "Athletics",
    "option_2": "Swimming",
    "answer": "Athletics"
  },
  {
    "genre": "Sports",
    "difficulty": "Hard",
    "option_1": "Sports streaming",
    "option_2": "TV sports",
    "answer": "Sports streaming"
  },
  {
    "genre": "Sports",
    "difficulty": "Hard",
    "option_1": "Esports",
    "option_2": "Traditional sports",
    "answer": "Traditional sports"
  },

  {
    "genre": "AI Tools",
    "difficulty": "Easy",
    "option_1": "ChatGPT",
    "option_2": "Google Gemini",
    "answer": "ChatGPT"
  },
  {
    "genre": "AI Tools",
    "difficulty": "Easy",
    "option_1": "Google Bard",
    "option_2": "Siri",
    "answer": "Siri"
  },
  {
    "genre": "AI Tools",
    "difficulty": "Easy",
    "option_1": "Google Assistant",
    "option_2": "Alexa",
    "answer": "Alexa"
  },
  {
    "genre": "AI Tools",
    "difficulty": "Easy",
    "option_1": "AI tools",
    "option_2": "Machine learning",
    "answer": "AI tools"
  },
  {
    "genre": "AI Tools",
    "difficulty": "Easy",
    "option_1": "AI image generator",
    "option_2": "AI text generator",
    "answer": "AI image generator"
  },
  {
    "genre": "AI Tools",
    "difficulty": "Easy",
    "option_1": "Google Lens",
    "option_2": "Google Translate",
    "answer": "Google Translate"
  },
  {
    "genre": "AI Tools",
    "difficulty": "Easy",
    "option_1": "ChatGPT login",
    "option_2": "ChatGPT app",
    "answer": "ChatGPT app"
  },
  {
    "genre": "AI Tools",
    "difficulty": "Easy",
    "option_1": "Gemini AI",
    "option_2": "Copilot",
    "answer": "Copilot"
  },
  {
    "genre": "AI Tools",
    "difficulty": "Easy",
    "option_1": "AI chatbot",
    "option_2": "Search engine",
    "answer": "Search engine"
  },
  {
    "genre": "AI Tools",
    "difficulty": "Easy",
    "option_1": "Google AI",
    "option_2": "OpenAI",
    "answer": "OpenAI"
  },
  {
    "genre": "Programming",
    "difficulty": "Easy",
    "option_1": "Python",
    "option_2": "Java",
    "answer": "Python"
  },
  {
    "genre": "Programming",
    "difficulty": "Easy",
    "option_1": "C",
    "option_2": "C++",
    "answer": "C++"
  },
  {
    "genre": "Programming",
    "difficulty": "Easy",
    "option_1": "JavaScript",
    "option_2": "PHP",
    "answer": "JavaScript"
  },
  {
    "genre": "Programming",
    "difficulty": "Easy",
    "option_1": "HTML",
    "option_2": "CSS",
    "answer": "CSS"
  },
  {
    "genre": "Programming",
    "difficulty": "Easy",
    "option_1": "Python",
    "option_2": "C",
    "answer": "Python"
  },
  {
    "genre": "Programming",
    "difficulty": "Easy",
    "option_1": "Java",
    "option_2": "Kotlin",
    "answer": "Java"
  },
  {
    "genre": "Programming",
    "difficulty": "Easy",
    "option_1": "SQL",
    "option_2": "NoSQL",
    "answer": "SQL"
  },
  {
    "genre": "Programming",
    "difficulty": "Easy",
    "option_1": "Web development",
    "option_2": "App development",
    "answer": "Web development"
  },
  {
    "genre": "Programming",
    "difficulty": "Easy",
    "option_1": "Frontend developer",
    "option_2": "Backend developer",
    "answer": "Frontend developer"
  },
  {
    "genre": "Programming",
    "difficulty": "Easy",
    "option_1": "Coding",
    "option_2": "Programming",
    "answer": "Coding"
  },

  {
    "genre": "Programming",
    "difficulty": "Moderate",
    "option_1": "Python programming",
    "option_2": "R programming",
    "answer": "Python programming"
  },
  {
    "genre": "Programming",
    "difficulty": "Moderate",
    "option_1": "React",
    "option_2": "Angular",
    "answer": "React"
  },
  {
    "genre": "Programming",
    "difficulty": "Moderate",
    "option_1": "Node.js",
    "option_2": "Django",
    "answer": "Node.js"
  },
  {
    "genre": "Programming",
    "difficulty": "Moderate",
    "option_1": "Flutter",
    "option_2": "React Native",
    "answer": "Flutter"
  },
  {
    "genre": "Programming",
    "difficulty": "Moderate",
    "option_1": "Git",
    "option_2": "GitHub",
    "answer": "GitHub"
  },
  {
    "genre": "Programming",
    "difficulty": "Moderate",
    "option_1": "VS Code",
    "option_2": "IntelliJ IDEA",
    "answer": "VS Code"
  },
  {
    "genre": "Programming",
    "difficulty": "Moderate",
    "option_1": "Data science",
    "option_2": "Machine learning",
    "answer": "Machine learning"
  },
  {
    "genre": "Programming",
    "difficulty": "Moderate",
    "option_1": "Competitive programming",
    "option_2": "Web development",
    "answer": "Web development"
  },
  {
    "genre": "Programming",
    "difficulty": "Moderate",
    "option_1": "Linux",
    "option_2": "Windows",
    "answer": "Windows"
  },
  {
    "genre": "Programming",
    "difficulty": "Moderate",
    "option_1": "Full stack developer",
    "option_2": "Software developer",
    "answer": "Software developer"
  },

  {
    "genre": "Programming",
    "difficulty": "Hard",
    "option_1": "Rust",
    "option_2": "Go",
    "answer": "Go"
  },
  {
    "genre": "Programming",
    "difficulty": "Hard",
    "option_1": "Microservices",
    "option_2": "Monolithic architecture",
    "answer": "Microservices"
  },
  {
    "genre": "Programming",
    "difficulty": "Hard",
    "option_1": "DevOps",
    "option_2": "Cloud computing",
    "answer": "Cloud computing"
  },
  {
    "genre": "Programming",
    "difficulty": "Hard",
    "option_1": "AWS",
    "option_2": "Azure",
    "answer": "AWS"
  },
  {
    "genre": "Programming",
    "difficulty": "Hard",
    "option_1": "Docker",
    "option_2": "Kubernetes",
    "answer": "Kubernetes"
  },
  {
    "genre": "Programming",
    "difficulty": "Hard",
    "option_1": "Low code",
    "option_2": "No code",
    "answer": "No code"
  },
  {
    "genre": "Programming",
    "difficulty": "Hard",
    "option_1": "AI coding tools",
    "option_2": "Manual coding",
    "answer": "AI coding tools"
  },
  {
    "genre": "Programming",
    "difficulty": "Hard",
    "option_1": "Open source projects",
    "option_2": "Personal projects",
    "answer": "Personal projects"
  },
  {
    "genre": "Programming",
    "difficulty": "Hard",
    "option_1": "Coding interviews",
    "option_2": "DSA preparation",
    "answer": "DSA preparation"
  },

  {
    "genre": "Christmas",
    "difficulty": "Easy",
    "option_1": "Christmas tree",
    "option_2": "Christmas lights",
    "answer": "Christmas tree"
  },
  {
    "genre": "Christmas",
    "difficulty": "Easy",
    "option_1": "Santa Claus",
    "option_2": "Reindeer",
    "answer": "Santa Claus"
  },
  {
    "genre": "Christmas",
    "difficulty": "Easy",
    "option_1": "Christmas gifts",
    "option_2": "Christmas decorations",
    "answer": "Christmas gifts"
  },
  {
    "genre": "Christmas",
    "difficulty": "Easy",
    "option_1": "Christmas cake",
    "option_2": "Plum cake",
    "answer": "Plum cake"
  },
  {
    "genre": "Christmas",
    "difficulty": "Easy",
    "option_1": "Christmas songs",
    "option_2": "Christmas movies",
    "answer": "Christmas songs"
  },
  {
    "genre": "Christmas",
    "difficulty": "Easy",
    "option_1": "Secret Santa",
    "option_2": "Gift exchange",
    "answer": "Secret Santa"
  },
  {
    "genre": "Christmas",
    "difficulty": "Easy",
    "option_1": "Christmas shopping",
    "option_2": "Black Friday",
    "answer": "Black Friday"
  },
  {
    "genre": "Christmas",
    "difficulty": "Easy",
    "option_1": "Christmas outfits",
    "option_2": "Party outfits",
    "answer": "Party outfits"
  },
  {
    "genre": "Christmas",
    "difficulty": "Easy",
    "option_1": "Carol singing",
    "option_2": "Christmas playlist",
    "answer": "Christmas playlist"
  },
  {
    "genre": "Christmas",
    "difficulty": "Easy",
    "option_1": "Merry Christmas",
    "option_2": "Happy New Year",
    "answer": "Merry Christmas"
  },

  {
    "genre": "Gaming",
    "difficulty": "Easy",
    "option_1": "BGMI",
    "option_2": "Free Fire",
    "answer": "Free Fire"
  },
  {
    "genre": "Gaming",
    "difficulty": "Easy",
    "option_1": "PUBG",
    "option_2": "BGMI",
    "answer": "PUBG"
  },
  {
    "genre": "Gaming",
    "difficulty": "Easy",
    "option_1": "Mobile Gaming",
    "option_2": "PC Gaming",
    "answer": "Mobile Gaming"
  },
  {
    "genre": "Gaming",
    "difficulty": "Easy",
    "option_1": "GTA V",
    "option_2": "Minecraft",
    "answer": "Minecraft"
  },
  {
    "genre": "Gaming",
    "difficulty": "Easy",
    "option_1": "PlayStation",
    "option_2": "Xbox",
    "answer": "PlayStation"
  },
  {
    "genre": "Gaming",
    "difficulty": "Easy",
    "option_1": "Online Games",
    "option_2": "Offline Games",
    "answer": "Online Games"
  },
  {
    "genre": "Gaming",
    "difficulty": "Easy",
    "option_1": "Multiplayer Games",
    "option_2": "Single-Player Games",
    "answer": "Multiplayer Games"
  },
  {
    "genre": "Gaming",
    "difficulty": "Easy",
    "option_1": "Action Games",
    "option_2": "Sports Games",
    "answer": "Action Games"
  },
  {
    "genre": "Gaming",
    "difficulty": "Easy",
    "option_1": "Shooting Games",
    "option_2": "Racing Games",
    "answer": "Shooting Games"
  },
  {
    "genre": "Gaming",
    "difficulty": "Easy",
    "option_1": "Gaming",
    "option_2": "Watching Gaming Streams",
    "answer": "Gaming"
  },

  {
    "genre": "Gaming",
    "difficulty": "Moderate",
    "option_1": "Valorant",
    "option_2": "BGMI",
    "answer": "Valorant"
  },
  {
    "genre": "Gaming",
    "difficulty": "Moderate",
    "option_1": "GTA Online",
    "option_2": "Story Mode",
    "answer": "GTA Online"
  },
  {
    "genre": "Gaming",
    "difficulty": "Moderate",
    "option_1": "Mobile Gaming",
    "option_2": "Console Gaming",
    "answer": "Mobile Gaming"
  },
  {
    "genre": "Gaming",
    "difficulty": "Moderate",
    "option_1": "Free Games",
    "option_2": "Paid Games",
    "answer": "Free Games"
  },
  {
    "genre": "Gaming",
    "difficulty": "Moderate",
    "option_1": "Casual Gaming",
    "option_2": "Competitive Gaming",
    "answer": "Casual Gaming"
  },
  {
    "genre": "Gaming",
    "difficulty": "Moderate",
    "option_1": "Night Gaming",
    "option_2": "Day Gaming",
    "answer": "Night Gaming"
  },
  {
    "genre": "Gaming",
    "difficulty": "Moderate",
    "option_1": "Headphones",
    "option_2": "Speakers for Gaming",
    "answer": "Headphones"
  },
  {
    "genre": "Gaming",
    "difficulty": "Moderate",
    "option_1": "Playing with Friends",
    "option_2": "Playing Solo",
    "answer": "Playing with Friends"
  },
  {
    "genre": "Gaming",
    "difficulty": "Moderate",
    "option_1": "Graphics Quality",
    "option_2": "Smooth Performance",
    "answer": "Smooth Performance"
  },
  {
    "genre": "Gaming",
    "difficulty": "Moderate",
    "option_1": "Long Gaming Sessions",
    "option_2": "Short Gaming Sessions",
    "answer": "Short Gaming Sessions"
  },

  {
    "genre": "Gaming",
    "difficulty": "Hard",
    "option_1": "Gaming for Fun",
    "option_2": "Gaming for Skill",
    "answer": "Gaming for Fun"
  },
  {
    "genre": "Gaming",
    "difficulty": "Hard",
    "option_1": "Gaming as Stress Relief",
    "option_2": "Study Break",
    "answer": "Study Break"
  },
  {
    "genre": "Gaming",
    "difficulty": "Hard",
    "option_1": "Gaming Improves Reflexes",
    "option_2": "Gaming Reduces Focus",
    "answer": "Gaming Improves Reflexes"
  },
  {
    "genre": "Gaming",
    "difficulty": "Hard",
    "option_1": "Gaming with Friends",
    "option_2": "Real-Life Hangouts",
    "answer": "Real-Life Hangouts"
  },
  {
    "genre": "Gaming",
    "difficulty": "Hard",
    "option_1": "Competitive Gaming",
    "option_2": "Enjoyment Gaming",
    "answer": "Enjoyment Gaming"
  },
  {
    "genre": "Gaming",
    "difficulty": "Hard",
    "option_1": "Gaming on Mobile",
    "option_2": "Gaming on Laptop",
    "answer": "Gaming on Mobile"
  },
  {
    "genre": "Gaming",
    "difficulty": "Hard",
    "option_1": "Gaming Time",
    "option_2": "Study Time",
    "answer": "Study Time"
  }
];

// Export for usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}
