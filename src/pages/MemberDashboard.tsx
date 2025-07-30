import { DashboardLayout } from '@/components/DashboardLayout';
import { GroupCard } from '@/components/GroupCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { mockGroups } from '@/data/mockData';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin,
  BookOpen,
  Users,
  Edit
} from 'lucide-react';

export function MemberDashboard() {
  const { user } = useAuth();
  
  // Find the group this member belongs to
  const userGroup = mockGroups.find(group => 
    group.members.some(member => member.id === user?.id)
  );
  
  const memberDetails = userGroup?.members.find(member => member.id === user?.id);
  
  if (!userGroup || !memberDetails) {
    return (
      <DashboardLayout title="Member Dashboard">
        <div className="text-center py-8">
          <h2 className="text-xl font-medium mb-2">No Group Membership</h2>
          <p className="text-muted-foreground">
            You're not currently a member of any group.
          </p>
        </div>
      </DashboardLayout>
    );
  }

  const nextMeeting = {
    date: 'Next Wednesday',
    time: userGroup.time,
    location: userGroup.location
  };

  return (
    <DashboardLayout title="Member Dashboard">
      <div className="space-y-8 animate-fade-in">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-accent to-secondary text-white rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2">Welcome, {user?.name}!</h2>
          <p className="text-white/90">
            Stay connected with your group and continue your spiritual journey.
          </p>
        </div>

        {/* Member Profile Card */}
        <Card className="bg-gradient-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Your Profile</CardTitle>
              <Button variant="outline" size="sm" className="gap-2">
                <Edit className="w-4 h-4" />
                Edit Profile
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-6">
              <Avatar className="w-20 h-20">
                <AvatarImage src={memberDetails.avatar} alt={memberDetails.name} />
                <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                  {memberDetails.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">{memberDetails.name}</h3>
                  <Badge 
                    className={`mt-1 ${
                      memberDetails.status === 'active' 
                        ? 'bg-green-100 text-green-800 border-green-200' 
                        : 'bg-gray-100 text-gray-800 border-gray-200'
                    }`}
                  >
                    {memberDetails.status === 'active' ? 'Active Member' : 'Inactive'}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>{memberDetails.email}</span>
                  </div>
                  
                  {memberDetails.phone && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span>{memberDetails.phone}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {new Date(memberDetails.joinedDate).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>Member ID: {memberDetails.id}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Group Information */}
        <Card className="bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-xl">Your Group</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <GroupCard group={userGroup} showMembers={false} />
            
            {/* Next Meeting Info */}
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="font-medium text-primary mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Next Meeting
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Date:</span>
                  <p className="font-medium">{nextMeeting.date}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Time:</span>
                  <p className="font-medium">{nextMeeting.time}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Location:</span>
                  <p className="font-medium">{nextMeeting.location}</p>
                </div>
              </div>
            </div>
            
            {/* Current Study */}
            <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
              <h3 className="font-medium text-secondary mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Current Study
              </h3>
              <p className="text-sm text-muted-foreground">{userGroup.curriculum}</p>
            </div>
          </CardContent>
        </Card>
              
        <Card className="bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-xl"><a href="#">Link Sadhana Chart</a></CardTitle>
          </CardHeader>
        </Card>
        <Card className="bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-xl">Fellow Group Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {userGroup.members
                .filter(member => member.id !== user?.id && member.status === 'active')
                .map((member) => (
                <div key={member.id} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{member.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Member since {new Date(member.joinedDate).getFullYear()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {userGroup.members.filter(m => m.status === 'active').length === 1 && (
              <div className="text-center py-4 text-muted-foreground">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">You're the only active member in this group</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}