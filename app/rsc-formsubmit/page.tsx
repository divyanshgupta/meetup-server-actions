import { formDataSchema, postMessage } from '@/lib/utils'
import { revalidatePath } from 'next/cache';
import { Button } from '@/components/ui/button'
import { Boundary } from '@/ui/boundary';
// import MessageList from './MessageList';


async function addMessage(formData: FormData) {
  'use server'

  //Read the form Data
  const name = formData.get("name")
  const message = formData.get("content")
  
  // Make an API call 
  console.log("Executing API call !!")
  await fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          userId: 1, title: name,content: message, completed: false,
      })
  })

  // Update the component state if required

  revalidatePath('/')
}

export default function Page() {
  return (
    <Boundary
      labels={['Server Component Boundary']}
      size="small"
      color="pink"
      animateRerendering={false}
    >
       <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">React Server Components and Server Actions - Method 1</h1>
       <form action={addMessage}>
      <h2>New Message</h2>
      <label htmlFor="name" className='space-y-8'>Your name:</label>
      <br/>
      <input type="text" id="name" name="name" required minLength={3} />
      <br/>
      <label htmlFor="content">Your message:</label>
      <br/>
      <textarea id="content" name="content" required minLength={3} />
      <br/>
      <Button
            className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100 hover:bg-gray-500 hover:text-white"
            variant="outline"
            
          >
      Send
      </Button>
      {/* <MessageList/> */}
      {/* <button type="submit">Send</button> */}
    </form>
    </div>
    </Boundary>
   
  );
}
