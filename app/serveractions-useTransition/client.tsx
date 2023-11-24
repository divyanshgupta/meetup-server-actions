'use client';

import { addMessage } from "@/lib/add-message";
import { useState, useTransition } from 'react'
import { Button } from '@/components/ui/button';
import { Boundary } from "@/ui/boundary";


export default function Client() {

    let [isPending, startTransition] = useTransition();
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const handleNameChange = (e) => setName(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);
    return (
       
    <Boundary
    labels={['Client Component Boundary']}
    size="small"
    color="blue"
    animateRerendering={false}
  >
        <>
            <h2>New Message</h2>
            <label htmlFor="name" className='space-y-8'>Your name:</label>
            <br />
            <input type="text" id="name" name="name" value={name} required minLength={3} onChange={handleNameChange} />
            <br />
            <label htmlFor="content">Your message:</label>
            <br />
            <textarea id="content" name="content" value={content} onChange={handleContentChange} required minLength={3} />
            <br />
            <Button
                className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100 hover:bg-gray-500 hover:text-white"
                variant="outline"
                onClick={() => startTransition(() => { 
                    const data = new Map();
                    data.set("name",name);
                    data.set("content",content);
                    addMessage(data)})}

            >
                Send
            </Button>

        </>
    </Boundary>
    )
}