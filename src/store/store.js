const store = {
  header: {
    nav: [
      {
        id: 1,
        name: "Home",
        img: "https://gambolthemes.net/workwise-new/images/icon1.png",
      },
      {
        id: 2,
        name: "Companies",
        img: "https://gambolthemes.net/workwise-new/images/icon2.png",
      },
      {
        id: 3,
        name: "Projects",
        img: "https://gambolthemes.net/workwise-new/images/icon3.png",
      },
      {
        id: 4,
        name: "Profile",
        img: "https://gambolthemes.net/workwise-new/images/icon4.png",
      },
      {
        id: 5,
        name: "Jobs",
        img: "https://gambolthemes.net/workwise-new/images/icon5.png",
      },
      {
        id: 6,
        name: "Messages",
        img: "https://gambolthemes.net/workwise-new/images/icon6.png",
      },
      {
        id: 7,
        name: "Notification",
        img: "https://gambolthemes.net/workwise-new/images/icon7.png",
      },
    ],
    search: {
      iconSrc:
        "https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png",
    },
  },
  users: [
    {
      src: "https://gambolthemes.net/workwise-new/images/resources/s1.png",
      name: "Jessica William",
      description: "Graphic Designer",
    },
    {
      src: "https://gambolthemes.net/workwise-new/images/resources/s2.png",
      name: "John Doe",
      description: "PHP Developer",
    },
    {
      src: "https://gambolthemes.net/workwise-new/images/resources/s3.png",
      name: "Poonam",
      description: "Wordpress Developer",
    },
    {
      src: "https://gambolthemes.net/workwise-new/images/resources/s3.png",
      name: "Bill Gates",
      description: "C / C++ Developer",
    },
    {
      src: "https://gambolthemes.net/workwise-new/images/resources/s5.png",
      name: "Jessica William",
      description: "Graphic Designer",
    },
    {
      src: "https://gambolthemes.net/workwise-new/images/resources/s6.png",
      name: "John Doe",
      description: "PHP Developer",
    },
  ],
  jobs: [
    {
      position: "Senoir Product Designer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      salary: "$25/hr",
      url: "google.com",
    },
    {
      position: "Senior UI / UX Designer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      salary: "$25/hr",
      url: "google.com",
    },
    {
      position: "Junoir Seo Designer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      salary: "$25/hr",
      url: "google.com",
    },
    {
      position: "Senior PHP Designer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      salary: "$25/hr",
      url: "google.com",
    },
    {
      position: "Senior Developer Designer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      salary: "$25/hr",
      url: "google.com",
    },
  ],
  posts: [
    {
      name: "John Doe",
      rank: "Epic Coder",
      location: "India",
      position: "Senior Wordpress Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...",
      salary: "$30 / hr",
      src: "https://gambolthemes.net/workwise-new/images/resources/user-pic.png",
      likes: 15,
      views: 421,
      comments: [
        {
          id: 1,
          author: "John Doe",
          content:
            "I often have to generate random UNIX timestamps so I created this simple online utility that does it for me. It lets you generate however many random POSIX times you need from a 64-bit time range. It works in the browser and is powered by alien technology from the future.",
          date: 1070215205,
        },
        {
          id: 2,
          author: "Lilian Johnson",
          content:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
          date: 1396098802,
          parent: 1,
        },
        {
          id: 3,
          author: "Alex Ram",
          content:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          date: 1402872287,
        },
        {
          id: 4,
          author: "Victoria Farrrel",
          content:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
          date: 1070215205,
        },
      ],
    },
    {
      name: "Lili Boba",
      rank: "Vonuci Coder",
      location: "Arabic",
      position: "Senior Wordpress Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...",
      salary: "$110 / hr",
      isAvailable: true,
      src: "https://gambolthemes.net/workwise-new/images/resources/us-pc2.png",
      likes: 411,
      views: 897,
      comments: [
        {
          id: 1,
          author: "John Doe",
          content:
            "I often have to generate random UNIX timestamps so I created this simple online utility that does it for me. It lets you generate however many random POSIX times you need from a 64-bit time range. It works in the browser and is powered by alien technology from the future.",
          date: 1070215205,
        },
        {
          id: 2,
          author: "Lilian Johnson",
          content:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          date: 1396098802,
          parent: 1,
        },
        {
          id: 3,
          author: "Alex Ram",
          content:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          date: 1402872287,
          parent: 1,
        },
        {
          id: 4,
          author: "Victoria Farrrel",
          content:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
          date: 1070215205,
          parent: 3,
        },
      ],
    },
  ],
};

export default store;

/*



*/
