export interface FactCard {
  id: string;
  title: string;
  value: string;
  subValue: string;
  category: "wealth" | "aviation" | "technology" | "industry";
  iconName: string;
  description: string;
  detailPoints: string[];
}

export interface CrewMember {
  id: string;
  role: string;
  gender: "male" | "female";
  uniformStyle: string;
  name: string;
  avatarSeed: string;
  bio: string;
}

export interface ProjectLog {
  id: string;
  timestamp: string;
  title: string;
  detail: string;
  status: "Completed" | "In Progress" | "Initiated";
}
