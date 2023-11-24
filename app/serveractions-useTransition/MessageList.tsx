import Link from "@/node_modules/next/link"

 async function fetchTodos() {

    try {
        const res = await fetch("http://localhost:3000/messages")

        const todos = await res.json()

        return todos
    } catch (err) {
        if (err instanceof Error) console.log(err.stack)
    }
}

export default async function MessageList() {
    const todos = await fetchTodos()

    let content
    if (!todos || todos.length === 0) {
        content = (
            <></>
        )
    } else {
        const sortedTodos = todos.reverse()

        content = (
            <>
                {sortedTodos.map(todo => (
                    <div key={todo.id}
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        {todo.title}
                      </div>

                      {todo.content ? (
                        <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                          {todo.content}
                        </div>
                      ) : null}
                    </div>
                ))}
            </>
        )
    }

    return content
}