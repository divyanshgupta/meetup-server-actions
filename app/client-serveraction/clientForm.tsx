'use client';

import { addMessage } from "@/lib/add-message";
import { formDataSchema, postMessage } from '@/lib/utils'
import { Button } from '@/components/ui/button';
import { Boundary } from "@/ui/boundary";


export default  function ClientForm(){
    return (
        
    <Boundary
    labels={['Client Component Boundary']}
    size="small"
    color="blue"
    animateRerendering={false}
  >
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
        </Boundary>
    )
}
