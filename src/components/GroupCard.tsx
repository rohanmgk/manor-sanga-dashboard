import { Group } from '@/types/group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  MapPin, 
  Clock, 
  Calendar, 
  Users, 
  Video, 
  Monitor, 
  Building,
  BookOpen
} from 'lucide-react';

interface GroupCardProps {
  group: Group;
  onClick?: () => void;
  showMembers?: boolean;
}

export function GroupCard({ group, onClick, showMembers = true }: GroupCardProps) {
  const getTypeIcon = (type: Group['type']) => {
    switch (type) {
      case 'online': return <Video className="w-4 h-4" />;
      case 'hybrid': return <Monitor className="w-4 h-4" />;
      case 'on-site': return <Building className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: Group['type']) => {
    switch (type) {
      case 'online': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'hybrid': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'on-site': return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const activeMembers = group.members.filter(m => m.status === 'active');

  return (
    <Card 
      className="bg-gradient-card hover:shadow-medium transition-all duration-300 cursor-pointer group border-l-4 border-l-primary"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {group.name}
            </CardTitle>
          </div>
          <div className="flex gap-2">
            <Badge className={`${getTypeColor(group.type)} gap-1`}>
              {getTypeIcon(group.type)}
              {group.type}
            </Badge>
            <Badge className="bg-green-100 text-green-800 border-green-200">
              Active
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="truncate">{group.location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span className="capitalize">{group.day} ({group.frequency})</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{activeMembers.length} active members</span>
          </div> 
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{group.time}</span>
          </div>           
          <div className="flex items-center gap-2 text-muted-foreground">
              <BookOpen className="w-4 h-4" />
              <span><b>{group.curriculum}</b></span>
            </div>          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span><b>Next Session: Wed, 02 Sep 2025</b></span>
          </div>                         
        </div>

        {showMembers && group.members.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Members:</p>
            <div className="flex -space-x-2">
              {group.members.slice(0, 5).map((member) => (
                <Avatar key={member.id} className="w-8 h-8 border-2 border-background">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              ))}
              {group.members.length > 5 && (
                <div className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">+{group.members.length - 5}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}