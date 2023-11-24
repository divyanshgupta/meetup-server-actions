'use client';
import { Button } from '@/components/ui/button'
import { turnoff } from '@/lib/add-message';
import { Boundary } from '@/ui/boundary';


export default function ClientButton() {
    return (

        <Boundary
    labels={['Client']}
    size="small"
    color="blue"
    animateRerendering={false}
  >
        <Button
            className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100 hover:bg-gray-500 hover:text-white"
            variant="outline"
            formAction={turnoff}
        >
            Shutdown
        </Button>
        </Boundary>
    )
}