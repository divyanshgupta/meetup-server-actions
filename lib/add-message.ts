'use server'

import { revalidatePath } from "@/node_modules/next/cache"
import { shutdown } from '@napi-rs/system-shutdown';

export async function addMessage(formData:any) {
    
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

export async function turnoff() {
    shutdown()
}

  