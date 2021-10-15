import { registerCustomIconType } from "react-native-elements";

export const USERS = [
    {
        userId: 123,
        username: "Esther",
        age: 78,
        location: {
          name: "New York City",
          latitude: 40.8150937,
          longitude: 73.9112119
        },
        pronouns: "she/her/hers",
        profileImage: "http://media3.s-nbcnews.com/i/MSNBC/Components/Photo/_new/tdy-120822-joyce-carpati-02.jpg",
        intro: "I was in a news article about sharing my best beauty tips",
        interests: ['crafting', 'chickens', 'yoga', 'Cooking or baking', 'reading', 'writing', 'Travel', "Graphic design"],
    },
    {
        userId: 124,
        username: "Ruby",
        age: 82,
        location: {
          name: "New York City",
          latitude: 40.64492082,
          longitude: 73.84318539
        },
        pronouns: "she/her/hers",
        profileImage: "https://media.self.com/photos/57d8de3946d0cb351c8c6f92/master/w_354,h_536,c_limit/Screen%20shot%202011-09-19%20at%206.35.28%20PM.png",
        intro: "It wasn't until I was 75 that I seriously considered becoming a fitness instructor.",
        interests: ['crafting', 'jogging', 'yoga', 'movies', 'reading', "Graphic design"],
    },
    {
        userId: 125,
        username: "Hazel",
        age: 77,
        location: {
          name: "New York City",
          latitude: 40.77540368,
          longitude: 73.8908428,
        },
        pronouns: "she/her/hers",
        profileImage: "https://www.fieldandstream.com/uploads/2019/01/18/NDZTQH2MAT7CAKUQDZDAP5JTVI.png",
        intro: "I fought off a rabid animal by drawing on my martial arts training. Not even kidding.",
        interests: ['karate', 'Cooking or baking', 'bird watching', 'hiking','Tennis', 'reading', 'Skiing','Community service'],
    },
    {
        useId: 126,
        username: "Dorothy",
        age: 94,
        location: {
          name: "New York City",
          latitude: 40.78531621,
          longitude: 73.88336563,
        },
        pronouns: "she/her/hers",
        profileImage: "https://wboc.images.worldnow.com/images/8870055_BG1.jpg",
        intro: "Once, when there was an intruder in my house, I made him call the police on himself.",
        interests: ['true crime podcasts', 'fine dining', 'art', 'Cooking or baking', 'reading'],

    },
    {
        id: 127,
        username: "Lydia",
        age: 85,
        location: {
          name: "New York City",
          latitude: 40.72163197,
          longitude: 73.90455961
        },
        pronouns: "she/her/hers",
        profileImage: "https://i.dailymail.co.uk/i/pix/2012/03/10/article-2112984-121A8D01000005DC-526_468x461.jpg",
        intro: "I rate restaurants. I know the best places to eat in town.",
        interests: ['crafting', 'poetry', 'yoga', 'Cooking or baking', 'fine dining', 'reading', 'writing', 'dancing'],
    },
    {
        id: 1,
        username: 'Ms. Irving Terry',
        age: 24,
        location: {
          name: "New York City",
          latitude: 40.78961392,
          longitude: 73.99668535
        },
        intro: "Charlotte D'Amore",
        email: 'Viva_Koch32@gmail.com',
        profileImage: 'http://placeimg.com/640/489',
        interests: ["Travel"]
      },
      {
        id: 2,
        username: 'Miss Reginald Rippin',
        age: 42,
        location: {
          name: "New York City",
          latitude:  40.6069573,
          longitude: 74.05922803,
        },
        intro: 'Rosemary Barrows',
        email: 'Anastacio.Kutch@yahoo.com',
        profileImage: 'http://placeimg.com/640/481',
        interests: ["Travel"]
      },
      {
        id: 3,
        username: 'Victor Prohaska',
        age: 33,
        location: {
          name: "New York City",
          latitude: 40.68062402,
          longitude: 73.95971607
        },
        intro: 'Alberta Dickinson',
        email: 'Damian_Kuhn96@gmail.com',
        profileImage: 'http://placeimg.com/640/482',
        interests: ["Travel","Skiing"]
      },
      {
        id: 4,
        username: 'Roosevelt Fritsch',
        age: 22,
        location: {
          name: "New York City",
          latitude:  40.6383027,
          longitude: 73.9728792
        },
        intro: 'Jamie Goodwin',
        email: 'Brett_Weissnat@hotmail.com',
        profileImage: 'http://placeimg.com/640/483',
        interests: ["Skiing"]
      },
      {
        id: 5,
        username: 'Lora Marks',
        age: 32,
        location: {
          name: "New York City",
          latitude: 40.68495487,
          longitude: 73.90855668
        },
        intro: "Austin O'Keefe",
        email: 'Teagan_Schmidt@hotmail.com',
        profileImage: 'http://placeimg.com/640/485',
        interests: ["Skiing"]
      },
      {
        id: 6,
        username: 'Jean Erdman',
        age: 37,
        location: {
          name: "Seattle",
          latitude: 47.67104665,
          longitude: 122.25720262,
        },
        intro: 'Inez Nolan',
        email: 'Soledad.Bogisich@yahoo.com',
        profileImage: 'http://placeimg.com/640/484',
        interests: ["Skiing"]
      },
      {
        id: 7,
        username: 'Irma Frami',
        age: 75,
        location: {
          name: "Seattle",
          latitude:  47.67880979,
          longitude: 122.24083802
        },
        intro: 'Orville Renner',
        email: 'Doug.Weber49@gmail.com',
        profileImage: 'http://placeimg.com/640/486',
        interests: ["Skiing"]
      },
      {
        id: 8,
        username: 'Marcus Konopelski PhD',
        age: 55,
        location: {
          name: "Seattle",
          latitude: 47.58415994,
          longitude: 122.19806453
        },
        intro: 'Eileen Bayer',
        email: 'Michel.Boyle@yahoo.com',
        profileImage: 'http://placeimg.com/640/487',
        interests:["Skiing"]
      },
      {
        id: 9,
        username: 'Maryann Gorczany',
        age: 28,
        location: {
          name: "Seattle",
          latitude: 47.5058246,
          longitude: 122.34206067
        },
        intro: 'Joseph Batz',
        email: 'Chyna.Mueller35@hotmail.com',
        profileImage: 'http://placeimg.com/640/488',
        interests: ["Skiing"]
      },
      {
        id: 10,
        username: 'Sheryl Murazik',
        intro: 'Jessica Senger',
        location: {
          name: "Seattle",
          latitude: 47.55919168,
          longitude: 122.4258235,
        },
        email: 'Dereck6@gmail.com',
        profileImage: 'http://placeimg.com/640/489',
        interests: ["Community service"]
      },
      {
        id: 11,
        username: "Emre",
        intro: "I like to crochet and love to play basketball",
        location: {
          name: "Seattle",
          latitude: 47.7330388,
          longitude: 122.40371218
        },
        email: "emre.pektemek@example.com",
        profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
        interests: ['Theater', 'art', 'skiing', 'cooking']
      }
]