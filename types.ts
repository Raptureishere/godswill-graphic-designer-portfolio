
export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Reference {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  avatarUrl: string;
}
