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
    id: 'group-5',
    name: 'Watford Sanga',
    preacherName: 'Radha Govinda Das',
    location: 'Watford',
    type: 'hybrid',
    day: 'Friday',
    time: '7:00 PM',
    frequency: 'weekly',
    curriculum: 'Bhagavad Gita Study',
    leaderId: '15',
    createdDate: '2024-01-20',
    members: [
      {
        id: '16',
        name: 'Priya Patel',
        email: 'priya.patel@email.com',
        phone: '+44 7700 900004',
        status: 'active',
        avatar: member2,
        joinedDate: '2024-01-25'
      },
      {
        id: '17',
        name: 'Amit Shah',
        email: 'amit.shah@email.com',
        phone: '+44 7700 900005',
        status: 'inactive',
        avatar: member1,
        joinedDate: '2024-02-10'
      }
    ]
  },
  {
    id: 'group-6',
    name: 'Slough Sanga',
    preacherName: 'Sita Devi Dasi',
    location: 'Slough',
    type: 'online',
    day: 'Wednesday',
    time: '8:00 PM',
    frequency: 'weekly',
    curriculum: 'Discover Yourself',
    leaderId: '18',
    createdDate: '2024-03-10',
    members: [
      {
        id: '19',
        name: 'Rohan Mehta',
        email: 'rohan.mehta@email.com',
        status: 'active',
        avatar: member4,
        joinedDate: '2024-03-15'
      }
    ]
  },
  {
    id: 'group-7',
    name: 'Reading Sanga',
    preacherName: 'Madhava Das',
    location: 'Reading',
    type: 'hybrid',
    day: 'Sunday',
    time: '6:00 PM',
    frequency: 'monthly',
    curriculum: 'Bhakti Vriksha',
    leaderId: '20',
    createdDate: '2024-02-18',
    members: [
      {
        id: '21',
        name: 'Sunita Rao',
        email: 'sunita.rao@email.com',
        phone: '+44 7700 900006',
        status: 'active',
        avatar: member2,
        joinedDate: '2024-02-20'
      },
      {
        id: '22',
        name: 'Deepak Kumar',
        email: 'deepak.kumar@email.com',
        phone: '+44 7700 900007',
        status: 'active',
        avatar: member3,
        joinedDate: '2024-03-01'
      }
    ]
  },
  {
    id: 'group-8',
    name: 'Milton Keynes Sanga',
    preacherName: 'Rasika Das',
    location: 'Milton Keynes',
    type: 'on-site',
    day: 'Thursday',
    time: '7:30 PM',
    frequency: 'weekly',
    curriculum: 'Srimad Bhagavatam Study',
    leaderId: '23',
    createdDate: '2024-01-30',
    members: [
      {
        id: '24',
        name: 'Anjali Sharma',
        email: 'anjali.sharma@email.com',
        status: 'active',
        avatar: member1,
        joinedDate: '2024-02-05'
      }
    ]
  },
  {
    id: 'group-9',
    name: 'Leicester Sanga',
    preacherName: 'Gopal Das',
    location: 'Leicester',
    type: 'hybrid',
    day: 'Saturday',
    time: '5:30 PM',
    frequency: 'weekly',
    curriculum: 'Discover Yourself',
    leaderId: '25',
    createdDate: '2024-03-05',
    members: [
      {
        id: '26',
        name: 'Kiran Desai',
        email: 'kiran.desai@email.com',
        phone: '+44 7700 900008',
        status: 'active',
        avatar: member2,
        joinedDate: '2024-03-10'
      }
    ]
  },
  {
    id: 'group-10',
    name: 'Birmingham Sanga',
    preacherName: 'Yamuna Devi Dasi',
    location: 'Birmingham',
    type: 'online',
    day: 'Monday',
    time: '8:00 PM',
    frequency: 'weekly',
    curriculum: 'Bhagavad Gita Study',
    leaderId: '27',
    createdDate: '2024-02-12',
    members: [
      {
        id: '28',
        name: 'Rajesh Gupta',
        email: 'rajesh.gupta@email.com',
        status: 'active',
        avatar: member3,
        joinedDate: '2024-02-15'
      }
    ]
  },
  {
    id: 'group-11',
    name: 'Coventry Sanga',
    preacherName: 'Nimai Das',
    location: 'Coventry',
    type: 'on-site',
    day: 'Tuesday',
    time: '7:00 PM',
    frequency: 'monthly',
    curriculum: 'Bhakti Vriksha',
    leaderId: '29',
    createdDate: '2024-01-28',
    members: [
      {
        id: '30',
        name: 'Sneha Agarwal',
        email: 'sneha.agarwal@email.com',
        status: 'active',
        avatar: member4,
        joinedDate: '2024-02-01'
      }
    ]
  },
  {
    id: 'group-12',
    name: 'Cambridge Sanga',
    preacherName: 'Radhika Devi Dasi',
    location: 'Cambridge',
    type: 'on-site',
    day: 'Friday',
    time: '6:30 PM',
    frequency: 'weekly',
    curriculum: 'Srimad Bhagavatam Study',
    leaderId: '31',
    createdDate: '2024-03-01',
    members: [
      {
        id: '32',
        name: 'Vikas Jain',
        email: 'vikas.jain@email.com',
        phone: '+44 7700 900009',
        status: 'active',
        avatar: member1,
        joinedDate: '2024-03-05'
      }
    ]
  },
  {
    id: 'group-13',
    name: 'Oxford Sanga',
    preacherName: 'Madhuri Das',
    location: 'Oxford',
    type: 'online',
    day: 'Thursday',
    time: '7:00 PM',
    frequency: 'weekly',
    curriculum: 'Discover Yourself',
    leaderId: '33',
    createdDate: '2024-02-20',
    members: [
      {
        id: '34',
        name: 'Neha Kapoor',
        email: 'neha.kapoor@email.com',
        status: 'active',
        avatar: member2,
        joinedDate: '2024-02-25'
      }
    ]
  },
  {
    id: 'group-14',
    name: 'Bedford Sanga',
    preacherName: 'Sundar Gopal Das',
    location: 'Bedford',
    type: 'on-site',
    day: 'Wednesday',
    time: '8:00 PM',
    frequency: 'monthly',
    curriculum: 'Bhakti Vriksha',
    leaderId: '35',
    createdDate: '2024-01-15',
    members: [
      {
        id: '36',
        name: 'Asha Menon',
        email: 'asha.menon@email.com',
        status: 'active',
        avatar: member3,
        joinedDate: '2024-01-20'
      }
    ]
  },
  {
    id: 'group-15',
    name: 'Southall Sanga',
    preacherName: 'Rama Das',
    location: 'Southall',
    type: 'hybrid',
    day: 'Sunday',
    time: '5:00 PM',
    frequency: 'weekly',
    curriculum: 'Srimad Bhagavatam Study',
    leaderId: '37',
    createdDate: '2024-03-10',
    members: [
      {
        id: '38',
        name: 'Manoj Nair',
        email: 'manoj.nair@email.com',
        phone: '+44 7700 900010',
        status: 'active',
        avatar: member4,
        joinedDate: '2024-03-12'
      }
    ]
  },
  {
    id: 'group-16',
    name: 'Hounslow Sanga',
    preacherName: 'Sita Ram Das',
    location: 'Hounslow',
    type: 'hybrid',
    day: 'Saturday',
    time: '6:00 PM',
    frequency: 'weekly',
    curriculum: 'Bhagavad Gita Study',
    leaderId: '39',
    createdDate: '2024-02-05',
    members: [
      {
        id: '40',
        name: 'Pooja Sethi',
        email: 'pooja.sethi@email.com',
        status: 'active',
        avatar: member1,
        joinedDate: '2024-02-10'
      }
    ]
  },
  {
    id: 'group-17',
    name: 'Ilford Sanga',
    preacherName: 'Govinda Das',
    location: 'Ilford',
    type: 'hybrid',
    day: 'Monday',
    time: '7:30 PM',
    frequency: 'monthly',
    curriculum: 'Discover Yourself',
    leaderId: '41',
    createdDate: '2024-01-22',
    members: [
      {
        id: '42',
        name: 'Ritu Sharma',
        email: 'ritu.sharma@email.com',
        status: 'active',
        avatar: member2,
        joinedDate: '2024-01-25'
      }
    ]
  },
  {
    id: 'group-18',
    name: 'Croydon Sanga',
    preacherName: 'Bhakti Charu Das',
    location: 'Croydon',
    type: 'online',
    day: 'Tuesday',
    time: '8:00 PM',
    frequency: 'weekly',
    curriculum: 'Bhakti Vriksha',
    leaderId: '43',
    createdDate: '2024-03-15',
    members: [
      {
        id: '44',
        name: 'Sandeep Kaur',
        email: 'sandeep.kaur@email.com',
        status: 'active',
        avatar: member3,
        joinedDate: '2024-03-18'
      }
    ]
  },
  {
    id: 'group-19',
    name: 'Wembley Sanga',
    preacherName: 'Radha Krishna Das',
    location: 'Wembley',
    type: 'hybrid',
    day: 'Friday',
    time: '7:00 PM',
    frequency: 'weekly',
    curriculum: 'Srimad Bhagavatam Study',
    leaderId: '45',
    createdDate: '2024-02-18',
    members: [
      {
        id: '46',
        name: 'Arjun Singh',
        email: 'arjun.singh@email.com',
        status: 'active',
        avatar: member4,
        joinedDate: '2024-02-20'
      }
    ]
  },
  {
    id: 'group-20',
    name: 'Ealing Sanga',
    preacherName: 'Madhava Gaur Das',
    location: 'Ealing',
    type: 'hybrid',
    day: 'Thursday',
    time: '6:30 PM',
    frequency: 'monthly',
    curriculum: 'Bhagavad Gita Study',
    leaderId: '47',
    createdDate: '2024-01-28',
    members: [
      {
        id: '48',
        name: 'Kavita Joshi',
        email: 'kavita.joshi@email.com',
        status: 'active',
        avatar: member1,
        joinedDate: '2024-02-01'
      }
    ]
  },
  {
    id: 'group-21',
    name: 'Stratford Sanga',
    preacherName: 'Rama Gopal Das',
    location: 'Stratford',
    type: 'online',
    day: 'Wednesday',
    time: '8:00 PM',
    frequency: 'weekly',
    curriculum: 'Discover Yourself',
    leaderId: '49',
    createdDate: '2024-03-05',
    members: [
      {
        id: '50',
        name: 'Nisha Verma',
        email: 'nisha.verma@email.com',
        status: 'active',
        avatar: member2,
        joinedDate: '2024-03-10'
      }
    ]
  },
  {
    id: 'group-22',
    name: 'Brent Sanga',
    preacherName: 'Sundar Das',
    location: 'Brent',
    type: 'hybrid',
    day: 'Monday',
    time: '7:00 PM',
    frequency: 'weekly',
    curriculum: 'Bhakti Vriksha',
    leaderId: '51',
    createdDate: '2024-02-10',
    members: [
      {
        id: '52',
        name: 'Vivek Anand',
        email: 'vivek.anand@email.com',
        status: 'active',
        avatar: member3,
        joinedDate: '2024-02-15'
      }
    ]
  },
  {
    id: 'group-23',
    name: 'Hammersmith Sanga',
    preacherName: 'Radha Mohan Das',
    location: 'Hammersmith',
    type: 'hybrid',
    day: 'Saturday',
    time: '5:30 PM',
    frequency: 'monthly',
    curriculum: 'Srimad Bhagavatam Study',
    leaderId: '53',
    createdDate: '2024-01-18',
    members: [
      {
        id: '54',
        name: 'Shreya Iyer',
        email: 'shreya.iyer@email.com',
        status: 'active',
        avatar: member4,
        joinedDate: '2024-01-20'
      }
    ]
  },
  {
    id: 'group-24',
    name: 'Kingston Sanga',
    preacherName: 'Gauranga Das',
    location: 'Kingston',
    type: 'online',
    day: 'Sunday',
    time: '6:00 PM',
    frequency: 'weekly',
    curriculum: 'Bhagavad Gita Study',
    leaderId: '55',
    createdDate: '2024-03-12',
    members: [
      {
        id: '56',
        name: 'Tarun Malhotra',
        email: 'tarun.malhotra@email.com',
        status: 'active',
        avatar: member1,
        joinedDate: '2024-03-15'
      }
    ]
  },
  {
    id: 'group-25',
    name: 'Barking Sanga',
    preacherName: 'Sita Devi Dasi',
    location: 'Barking',
    type: 'hybrid',
    day: 'Friday',
    time: '7:30 PM',
    frequency: 'weekly',
    curriculum: 'Discover Yourself',
    leaderId: '57',
    createdDate: '2024-02-22',
    members: [
      {
        id: '58',
        name: 'Mehul Shah',
        email: 'mehul.shah@email.com',
        status: 'active',
        avatar: member2,
        joinedDate: '2024-02-25'
      }
    ]
  },
  {
    id: 'group-26',
    name: 'Woolwich Sanga',
    preacherName: 'Radha Gopinath Das',
    location: 'Woolwich',
    type: 'hybrid',
    day: 'Thursday',
    time: '8:00 PM',
    frequency: 'monthly',
    curriculum: 'Srimad Bhagavatam Study',
    leaderId: '59',
    createdDate: '2024-01-25',
    members: [
      {
        id: '60',
        name: 'Divya Nair',
        email: 'divya.nair@email.com',
        status: 'active',
        avatar: member3,
        joinedDate: '2024-01-28'
      }
    ]
  }
];
