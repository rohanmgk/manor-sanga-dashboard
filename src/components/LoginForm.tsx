import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { LogIn, Users, Church } from 'lucide-react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        toast({
          title: "Login successful",
          description: "Welcome to the Manor Sanga Portal",
        });
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const demoAccounts = [
    { role: 'Admin', email: 'admin@church.com', desc: 'View all groups and manage system' },
    { role: 'Leader', email: 'leader@church.com', desc: 'Manage Stevenage Sanga' },
    { role: 'Member', email: 'member@church.com', desc: 'View personal details only' }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Hero Section */}
        <div className="text-center lg:text-left text-white">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Church className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold">Manor Sanga Portal</h1>
          </div>
          <p className="text-xl text-white/90 mb-8">
            Manage your groups, members, and activities with ease. Connect, grow, and serve together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <div className="flex items-center gap-2 text-white/80">
              <Users className="w-4 h-4" />
              <span className="text-sm">Member Management</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <LogIn className="w-4 h-4" />
              <span className="text-sm">Role-Based Access</span>
            </div>
          </div>
        </div>

        {/* Login Card */}
        <Card className="bg-card shadow-glow border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl bg-gradient-primary bg-clip-text text-transparent">
              Welcome Back
            </CardTitle>
            <CardDescription>
              Sign in to access your group management dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="transition-smooth"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="transition-smooth"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className="space-y-3">
            
              {demoAccounts.map((account) => (
                <Card 
                  key={account.email}
                  className="p-3 cursor-pointer hover:shadow-soft transition-smooth border-l-4 border-l-primary"
                  onClick={() => {
                    setEmail(account.email);
                    setPassword('password');
                  }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm">{account.role}</p>
                      <p className="text-xs text-muted-foreground">{account.desc}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Use
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}