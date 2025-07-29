import { Group } from '@/types/group';
import member1 from '@/assets/member-1.jpg';
import member2 from '@/assets/member-2.jpg';
import member3 from '@/assets/member-3.jpg';
import member4 from '@/assets/member-4.jpg';

export const mockGroups: Group[] = [
  {
    id: 'group-1',
    name: 'Young Adults Fellowship',
    preacherName: 'Pastor David Wilson',
    location: 'Main Sanctuary',
    type: 'hybrid',
    day: 'Wednesday',
    time: '7:00 PM',
    frequency: 'weekly',
    curriculum: 'Faith in Action: Living Out Your Beliefs',
    leaderId: '2',
    createdDate: '2024-01-15',
    members: [
      {
        id: '3',
        name: 'Sarah Johnson',
        email: 'sarah.johnson@email.com',
        phone: '+1 (555) 123-4567',
        status: 'active',
        avatar: member1,
        joinedDate: '2024-01-20'
      },
      {
        id: '4',
        name: 'Michael Chen',
        email: 'michael.chen@email.com',
        phone: '+1 (555) 234-5678',
        status: 'active',
        avatar: member2,
        joinedDate: '2024-02-10'
      },
      {
        id: '5',
        name: 'Emily Davis',
        email: 'emily.davis@email.com',
        phone: '+1 (555) 345-6789',
        status: 'inactive',
        avatar: member3,
        joinedDate: '2024-01-25'
      },
      {
        id: '6',
        name: 'James Rodriguez',
        email: 'james.rodriguez@email.com',
        phone: '+1 (555) 456-7890',
        status: 'active',
        avatar: member4,
        joinedDate: '2024-03-05'
      }
    ]
  },
  {
    id: 'group-2',
    name: 'Senior Saints Bible Study',
    preacherName: 'Pastor Margaret Thompson',
    location: 'Fellowship Hall',
    type: 'on-site',
    day: 'Thursday',
    time: '10:00 AM',
    frequency: 'weekly',
    curriculum: 'Wisdom of the Ages: Old Testament Studies',
    leaderId: '7',
    createdDate: '2023-09-01',
    members: [
      {
        id: '8',
        name: 'Robert Williams',
        email: 'robert.williams@email.com',
        phone: '+1 (555) 567-8901',
        status: 'active',
        avatar: member2,
        joinedDate: '2023-09-10'
      },
      {
        id: '9',
        name: 'Dorothy Miller',
        email: 'dorothy.miller@email.com',
        phone: '+1 (555) 678-9012',
        status: 'active',
        avatar: member3,
        joinedDate: '2023-09-15'
      }
    ]
  },
  {
    id: 'group-3',
    name: 'Online Prayer Warriors',
    preacherName: 'Pastor Andrew Lee',
    location: 'Zoom Meeting Room',
    type: 'online',
    day: 'Sunday',
    time: '6:00 PM',
    frequency: 'weekly',
    curriculum: 'The Power of Prayer: Deepening Your Connection',
    leaderId: '10',
    createdDate: '2024-03-01',
    members: [
      {
        id: '11',
        name: 'Jennifer Brown',
        email: 'jennifer.brown@email.com',
        status: 'active',
        avatar: member1,
        joinedDate: '2024-03-10'
      },
      {
        id: '12',
        name: 'Thomas Wilson',
        email: 'thomas.wilson@email.com',
        status: 'active',
        avatar: member4,
        joinedDate: '2024-03-15'
      }
    ]
  },
  {
    id: 'group-4',
    name: 'Family Life Ministry',
    preacherName: 'Pastor Lisa Garcia',
    location: 'Community Center',
    type: 'hybrid',
    day: 'Saturday',
    time: '4:00 PM',
    frequency: 'monthly',
    curriculum: 'Building Strong Families: Biblical Foundations',
    leaderId: '13',
    createdDate: '2024-02-01',
    members: [
      {
        id: '14',
        name: 'Maria Gonzalez',
        email: 'maria.gonzalez@email.com',
        phone: '+1 (555) 789-0123',
        status: 'active',
        avatar: member3,
        joinedDate: '2024-02-15'
      }
    ]
  }
];