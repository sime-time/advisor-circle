export const categories = new Map<number, string>([
  [0, "N/A"],
  [1, "Business"],
  [2, "Technology"],
  [3, "Health"],
  [4, "Finance"],
  [5, "Creative"],
  [6, "Science"],
  [7, "Education"],
  [8, "Sports"],
  [9, "Career"],
  [10, "Life"],
  [11, "Relationships"],
  [12, "Personal Growth"],
]);

export type Advisor = {
  id: number;
  name: string;
  title: string;
  categories: number[];
  rating: number;
  reviews: number;
  image: string;
  price: number; // in pennies
  availability: number;
  bio: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
};

// helper function to format price

// helper function to format availability options


export const advisors: Advisor[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Biotech Executive & Researcher",
    categories: [6, 2, 9],
    rating: 4.9,
    reviews: 47,
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    price: 0,
    availability: -1,
    bio: "20+ years in pharmaceutical research and biotech leadership. Passionate about mentoring young scientists and career transitions.",
    location: {
      city: "San Francisco",
      state: "California",
      country: "United States"
    }
  },
  {
    id: 2,
    name: "Michael Roberts",
    title: "Sports Psychology Coach",
    categories: [8, 3, 12],
    rating: 4.7,
    reviews: 27,
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    price: 4900,
    availability: 2,
    bio: "Former Olympic athlete turned psychology coach. I help individuals and teams unlock peak performance through mental conditioning.",
    location: {
      city: "Boston",
      state: "Massachusetts",
      country: "United States"
    }
  },
  {
    id: 3,
    name: "Amara Washington",
    title: "Tech Entrepreneur & Mentor",
    categories: [1, 2, 9],
    rating: 4.8,
    reviews: 12,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    price: 7500,
    availability: 0,
    bio: "Founded and sold 3 tech startups. Now dedicated to helping new founders navigate the challenging startup journey.",
    location: {
      city: "Seattle",
      state: "Washington",
      country: "United States"
    }
  },
  {
    id: 4,
    name: "David Kim",
    title: "Financial Advisor & Wealth Coach",
    categories: [4, 1, 12],
    rating: 4.6,
    reviews: 69,
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    price: 6500,
    availability: -1,
    bio: "Certified financial planner with expertise in sustainable investing and long-term wealth building strategies.",
    location: {
      city: "New York",
      state: "New York",
      country: "United States"
    }
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    title: "Creative Director & Design Mentor",
    categories: [5, 1, 9],
    rating: 4.9,
    reviews: 18,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    price: 0,
    availability: 3,
    bio: "Award-winning creative director helping designers and creative professionals elevate their craft and build impressive portfolios.",
    location: {
      city: "Los Angeles",
      state: "California",
      country: "United States"
    }
  },
  {
    id: 6,
    name: "Dr. James Wilson",
    title: "Education Innovation Consultant",
    categories: [7, 2, 9],
    rating: 4.7,
    reviews: 9,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    price: 5500,
    availability: -1,
    bio: "Former university dean pioneering new approaches to education and career development in the digital age.",
    location: {
      city: "Austin",
      state: "Texas",
      country: "United States"
    }
  }
];
