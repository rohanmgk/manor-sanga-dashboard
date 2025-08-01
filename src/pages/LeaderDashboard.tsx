import { DashboardLayout } from '@/components/DashboardLayout';
import { GroupCard } from '@/components/GroupCard';
import { MemberCard } from '@/components/MemberCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { mockGroups } from '@/data/mockData';
import { 
  Users, 
  UserPlus, 
  Calendar, 
  BookOpen,
  TrendingUp,
  Search,
  Mail,
  Phone
} from 'lucide-react';
import { useState } from 'react';

export function LeaderDashboard() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Find the group this leader manages
  const userGroup = mockGroups.find(group => group.leaderId === user?.id);
  
  if (!userGroup) {
    return (
      <DashboardLayout title="Group Leader Dashboard">
        <div className="text-center py-8">
          <h2 className="text-xl font-medium mb-2">No Group Assigned</h2>
          <p className="text-muted-foreground">
            You haven't been assigned to lead any groups yet.
          </p>
        </div>
      </DashboardLayout>
    );
  }

  const filteredMembers = userGroup.members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeMembers = userGroup.members.filter(m => m.status === 'active');
  const inactiveMembers = userGroup.members.filter(m => m.status === 'inactive');

  const stats = [
    {
      title: 'Total Members',
      value: userGroup.members.length,
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Sanga Attendance',
      value: '70%',
      subtitle: ``,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Meeting Schedule',
      value: userGroup.day,
      subtitle: `${userGroup.time} (${userGroup.frequency})`,
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Current Study',
      value: 'Gita 3',
      subtitle: 'curriculum in progress',
      icon: BookOpen,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <DashboardLayout title="Group Leader Dashboard">
      <div className="space-y-8 animate-fade-in">
        {/* Welcome Section */}
        <div className="bg-gradient-secondary text-white rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2">Welcome, {user?.name}!</h2>
          <p className="text-white/90">
            Manage your group members, track attendance, and foster spiritual growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-gradient-card hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    {stat.subtitle && (
                      <p className="text-xs text-muted-foreground mt-1">{stat.subtitle}</p>
                    )}
                  </div>
                  <div className={`p-3 ${stat.bgColor} rounded-lg`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Group Details */}
        <Card className="bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-xl">Your Group</CardTitle>
          </CardHeader>
          <CardContent>
            <GroupCard group={userGroup} showMembers={false} />
          </CardContent>
        </Card>

        {/* Members Section */}
        {/* Sanga Attendance Card */}
        <Card className="bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-xl">Sanga Attendance (Last 4 Sessions)</CardTitle>
            <p className="text-muted-foreground mt-1 text-sm">
              Track attendance for your group members over the last four Sessions.
            </p>
          </CardHeader>
          <CardContent>
            {/* Mock Data for Attendance */}
            {(() => {
              // Mock: last 4 sanga dates (most recent first)
              const lastFourDates = [
                "2024-06-05",
                "2024-05-29",
                "2024-05-22",
                "2024-05-15"
              ];
              // Mock: attendance per member (id: {date: present/absent})
              // We'll use userGroup.members and randomly assign attendance
              const attendanceMap: Record<string, Record<string, boolean>> = {};
              userGroup.members.forEach((member, idx) => {
                attendanceMap[member.id] = {};
                lastFourDates.forEach((date, dIdx) => {
                  // For mock: alternate present/absent for variety
                  attendanceMap[member.id][date] = ((idx + dIdx) % 3 !== 0);
                });
              });

              return (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm border-separate border-spacing-y-2">
                    <thead>
                      <tr>
                        <th className="text-left px-2 py-1 font-medium text-muted-foreground">Member</th>
                        {lastFourDates.map(date => (
                          <th key={date} className="px-2 py-1 font-medium text-muted-foreground whitespace-nowrap">
                            {new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} 2025
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {userGroup.members.map(member => (
                        <tr key={member.id} className="bg-card rounded">
                          <td className="px-2 py-1 flex items-center gap-2">
                            <img
                              src={member.avatar}
                              alt={member.name}
                              className="w-6 h-6 rounded-full border border-muted"
                            />
                            <span className="truncate max-w-[120px]">{member.name}</span>
                          </td>
                          {lastFourDates.map(date => (
                            <td key={date} className="px-2 py-1 text-center">
                              {attendanceMap[member.id][date] ? (
                                <span className="inline-block w-5 h-5 rounded-full bg-green-200 text-green-700">
                                  <svg className="w-4 h-4 mx-auto my-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8l3 3 5-5" />
                                  </svg>
                                </span>
                              ) : (
                                <span className="inline-block w-5 h-5 rounded-full bg-red-100 text-red-600">
                                  <svg className="w-4 h-4 mx-auto my-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5l6 6M11 5l-6 6" />
                                  </svg>
                                </span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })()}
          </CardContent>
        </Card>

        {/* Members Section */}
        <Card className="bg-gradient-card">
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <CardTitle className="text-xl">Group Members</CardTitle>
                <div className="flex gap-2 mt-2">
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    {activeMembers.length} Active
                  </Badge>
                  {inactiveMembers.length > 0 && (
                    <Badge className="bg-gray-100 text-gray-800 border-gray-200">
                      {inactiveMembers.length} Inactive
                    </Badge>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Whatsapp All
                </Button>
                <Button className="bg-gradient-secondary hover:shadow-glow transition-all duration-300 gap-2">
                  <UserPlus className="w-4 h-4" />
                  Add Member
                </Button>
              </div>
            </div>
            
            {/* Search */}
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          
          <CardContent>
            {filteredMembers.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredMembers.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No members found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}