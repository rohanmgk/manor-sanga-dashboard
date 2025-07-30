export type GroupType = 'online' | 'hybrid' | 'on-site';
export type Frequency = 'weekly' | 'monthly';
export type MemberStatus = 'active' | 'inactive';

export interface Member {
  id: string;
  name: string;
  email: string;
  phone?: string;
  status: MemberStatus;
  avatar?: string;
  joinedDate: string;
}

export interface Group {
  id: string;
  name: string;
  preacherName: string;
  location: string;
  type: GroupType;
  day: string;
  time: string;
  frequency: Frequency;
  curriculum: string;
  members: Member[];
  leaderId: string;
  createdDate: string;
}