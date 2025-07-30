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
      title: 'Active Members',
      value: activeMembers.length,
      subtitle: `${Math.round((activeMembers.length / userGroup.members.length) * 100)}% active`,
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
      value: 'Active',
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
            
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h3 className="font-medium mb-2">Current Curriculum</h3>
              <p className="text-sm text-muted-foreground">{userGroup.curriculum}</p>
            </div>
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
                  Email All
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