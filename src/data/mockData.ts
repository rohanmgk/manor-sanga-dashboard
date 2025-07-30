import { Group } from '@/types/group';
import member1 from '@/assets/member-1.jpg';
import member2 from '@/assets/member-2.jpg';
import member3 from '@/assets/member-3.jpg';
import member4 from '@/assets/member-4.jpg';

export const mockGroups: Group[] = [
  {
    id: 'group-1',
    name: 'Stevenage (Rohan and Manisha)',
    preacherName: 'Rohan and Manisha',
    location: 'Stevenage',
    type: 'hybrid',
    day: 'Saturday',
    time: '4:00 PM',
    frequency: 'weekly',
    curriculum: 'Gita 3',
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
    name: 'Slough (Nikhil, Smital, Romni and Ravi)',
    preacherName: 'Nikhil, Smital, Romni and Ravi',
    location: 'Slough',
    type: 'on-site',
    day: 'Friday',
    time: '7:00 PM',
    frequency: 'weekly',
    curriculum: 'Devotional Service',
    leaderId: '7',
    createdDate: '2023-09-01',
    members: [
      {
        id: '8',
        name: 'Ankit Sharma',
        email: 'ankit.sharma@email.com',
        phone: '+44 7700 900001',
        status: 'active',
        avatar: member2,
        joinedDate: '2023-09-10'
      },
      {
        id: '9',
        name: 'Priya Patel',
        email: 'priya.patel@email.com',
        phone: '+44 7700 900002',
        status: 'active',
        avatar: member3,
        joinedDate: '2023-09-15'
      },
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
    id: 'group-3',
    name: 'Harrow Sanga',
    preacherName: 'Gauranga Gopal Das',
    location: 'Harrow',
    type: 'online',
    day: 'Sunday',
    time: '5:00 PM',
    frequency: 'weekly',
    curriculum: 'Discover Yourself',
    leaderId: '10',
    createdDate: '2024-03-01',
    members: [
      {
        id: '11',
        name: 'Meera Joshi',
        email: 'meera.joshi@email.com',
        status: 'active',
        avatar: member1,
        joinedDate: '2024-03-10'
      },
      {
        id: '12',
        name: 'Rahul Verma',
        email: 'rahul.verma@email.com',
        status: 'active',
        avatar: member4,
        joinedDate: '2024-03-15'
      }
    ]
  },
  {
    id: 'group-4',
    name: 'Luton (Prasad and Smita)',
    preacherName: 'Prasad and Smita',
    location: 'Luton',
    type: 'hybrid',
    day: 'Saturday',
    time: '4:00 PM',
    frequency: 'monthly',
    curriculum: 'Srimad Bhagavatam Study',
    leaderId: '13',
    createdDate: '2024-02-01',
    members: [
      {
        id: '14',
        name: 'Vikram Singh',
        email: 'vikram.singh@email.com',
        phone: '+44 7700 900003',
        status: 'active',
        avatar: member3,
        joinedDate: '2024-02-15'
      }
    ]
  },
  {
    "id": "group-5",
    "name": "Group 5",
    "preacherName": "Preacher Name 5",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-6",
    "name": "Group 6",
    "preacherName": "Preacher Name 6",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-7",
    "name": "Group 7",
    "preacherName": "Preacher Name 7",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-8",
    "name": "Group 8",
    "preacherName": "Preacher Name 8",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-9",
    "name": "Group 9",
    "preacherName": "Preacher Name 9",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-10",
    "name": "Group 10",
    "preacherName": "Preacher Name 10",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-11",
    "name": "Group 11",
    "preacherName": "Preacher Name 11",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-12",
    "name": "Group 12",
    "preacherName": "Preacher Name 12",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-13",
    "name": "Group 13",
    "preacherName": "Preacher Name 13",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-14",
    "name": "Group 14",
    "preacherName": "Preacher Name 14",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-15",
    "name": "Group 15",
    "preacherName": "Preacher Name 15",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-16",
    "name": "Group 16",
    "preacherName": "Preacher Name 16",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-17",
    "name": "Group 17",
    "preacherName": "Preacher Name 17",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-18",
    "name": "Group 18",
    "preacherName": "Preacher Name 18",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-19",
    "name": "Group 19",
    "preacherName": "Preacher Name 19",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-20",
    "name": "Group 20",
    "preacherName": "Preacher Name 20",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-21",
    "name": "Group 21",
    "preacherName": "Preacher Name 21",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-22",
    "name": "Group 22",
    "preacherName": "Preacher Name 22",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-23",
    "name": "Group 23",
    "preacherName": "Preacher Name 23",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-24",
    "name": "Group 24",
    "preacherName": "Preacher Name 24",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-25",
    "name": "Group 25",
    "preacherName": "Preacher Name 25",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-26",
    "name": "Group 26",
    "preacherName": "Preacher Name 26",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-27",
    "name": "Group 27",
    "preacherName": "Preacher Name 27",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  },
  {
    "id": "group-28",
    "name": "Group 28",
    "preacherName": "Preacher Name 28",
    "location": "Luton",
    "type": "hybrid",
    "day": "Saturday",
    "time": "4:00 PM",
    "frequency": "monthly",
    "curriculum": "Srimad Bhagavatam Study",
    "leaderId": "13",
    "createdDate": "2024-02-01",
    "members": [
      {
        "id": "14",
        "name": "Vikram Singh",
        "email": "vikram.singh@email.com",
        "phone": "+44 7700 900003",
        "status": "active",
        "avatar": "member3",
        "joinedDate": "2024-02-15"
      }
    ]
  }
];