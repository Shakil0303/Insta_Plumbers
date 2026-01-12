export interface BlogPost {
  id: number;
  image: string;
  date: string;
  title: string;
  category: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: '/images/Repair.png',
    date: '16 OCT 2024',
    title: 'Top 5 Signs You Need a Plumber – Before It\'s Too Late',
    category: 'PLUMBER',
    author: 'ANAIS EMMERICH'
  },
  {
    id: 2,
    image: '/images/BoilerFix.png',
    date: '16 OCT 2024',
    title: 'Boiler Not Working? Try These Quick Fixes First',
    category: 'SPECIAL REPAIRS',
    author: 'ANAIS EMMERICH'
  },
  {
    id: 3,
    image: '/images/plumbing.png',
    date: '16 OCT 2024',
    title: 'How to Unblock a Drain – Safely and Effectively',
    category: 'HANDYMAN',
    author: 'MARC RATKE'
  }
];