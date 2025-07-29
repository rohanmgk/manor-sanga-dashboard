import { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { GroupCard } from '@/components/GroupCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { mockGroups } from '@/data/mockData';
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  Search, 
  Plus,
  Filter,
  BarChart3
} from 'lucide-react';

export function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredGroups = mockGroups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.preacherName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || group.type === selectedType;
    return matchesSearch && matchesType;
  });

  const totalMembers = mockGroups.reduce((sum, group) => sum + group.members.length, 0);
  const activeMembers = mockGroups.reduce((sum, group) => 
    sum + group.members.filter(m => m.status === 'active').length, 0);
  const weeklyGroups = mockGroups.filter(g => g.frequency === 'weekly').length;

  const stats = [
    {
      title: 'Total Groups',
      value: mockGroups.length,
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Active Members',
      value: activeMembers,
      subtitle: `of ${totalMembers} total`,
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Weekly Meetings',
      value: weeklyGroups,
      subtitle: `${mockGroups.length - weeklyGroups} monthly`,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Avg Group Size',
      value: Math.round(totalMembers / mockGroups.length),
      subtitle: 'members per group',
      icon: BarChart3,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <DashboardLayout title="Administrator Dashboard">
      <div className="space-y-8 animate-fade-in">
        {/* Welcome Section */}
        <div className="bg-gradient-hero text-white rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2">Welcome back, Admin!</h2>
          <p className="text-white/90">
            Manage all ministry groups, track member engagement, and oversee group activities.
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

        {/* Groups Section */}
        <Card className="bg-gradient-card">
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <CardTitle className="text-xl">All Ministry Groups</CardTitle>
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 gap-2">
                <Plus className="w-4 h-4" />
                Add New Group
              </Button>
            </div>
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search groups or preachers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant={selectedType === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedType('all')}
                >
                  All Types
                </Button>
                <Button
                  variant={selectedType === 'online' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedType('online')}
                >
                  Online
                </Button>
                <Button
                  variant={selectedType === 'hybrid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedType('hybrid')}
                >
                  Hybrid
                </Button>
                <Button
                  variant={selectedType === 'on-site' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedType('on-site')}
                >
                  On-site
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            {filteredGroups.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredGroups.map((group) => (
                  <GroupCard key={group.id} group={group} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No groups found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or filters.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}