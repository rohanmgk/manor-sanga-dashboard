import { useAuth } from '@/contexts/AuthContext';
import { LoginForm } from '@/components/LoginForm';
import { AdminDashboard } from './AdminDashboard';
import { LeaderDashboard } from './LeaderDashboard';
import { MemberDashboard } from './MemberDashboard';

const Index = () => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  switch (user?.role) {
    case 'admin':
      return <AdminDashboard />;
    case 'leader':
      return <LeaderDashboard />;
    case 'member':
      return <MemberDashboard />;
    default:
      return <LoginForm />;
  }
};

export default Index;
