import { Member } from '@/types/group';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, Phone, Calendar, CheckCircle, XCircle } from 'lucide-react';

interface MemberCardProps {
  member: Member;
  onClick?: () => void;
}

export function MemberCard({ member, onClick }: MemberCardProps) {
  return (
    <Card 
      className="bg-gradient-card hover:shadow-medium transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={member.avatar} alt={member.name} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {member.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium group-hover:text-primary transition-colors truncate">
                {member.name}
              </h3>
              <Badge 
                className={`gap-1 ${
                  member.status === 'active' 
                    ? 'bg-green-100 text-green-800 border-green-200' 
                    : 'bg-gray-100 text-gray-800 border-gray-200'
                }`}
              >
                {member.status === 'active' ? (
                  <CheckCircle className="w-3 h-3" />
                ) : (
                  <XCircle className="w-3 h-3" />
                )}
                {member.status}
              </Badge>
            </div>
            
            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3" />
                <span className="truncate">{member.email}</span>
              </div>
              
              {member.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3" />
                  <span>{member.phone}</span>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                <span>Joined {new Date(member.joinedDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}