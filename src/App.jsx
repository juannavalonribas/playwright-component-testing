import { Button } from '@/components/ui/Button';

function App() {
  return (
      <div className="flex items-center justify-center min-h-screen">
          <Button variant='default'>Click me</Button>
          <Button variant='ghost'>Click me</Button>
          <Button variant='outline'>Click me</Button>
          <Button variant='link'>Click me</Button>
      </div>
  );
}

export default App;
