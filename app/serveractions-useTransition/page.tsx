import { Boundary } from '@/ui/boundary';
import Client from './client';
// import MessageList from './MessageList';



export default function Page() {
  return (
    
    <Boundary
      labels={['Server Component Boundary']}
      size="small"
      color="pink"
      animateRerendering={false}
    >
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Server Actions using useTransition</h1>
      <Client/>
    </div>
    </Boundary>
  );
}
