export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'RSC and Server Actions',
    items: [
      {
        name: 'Using Form Submit',
        slug: 'rsc-formsubmit',
        description: 'Create UI that is shared across routes',
      },
      {
        name: 'Using Form Elements',
        slug: 'rsc-formaction',
        description: 'Organize routes without affecting URL paths',
      }
    ],
  },
  {
    name: 'Client Components and Server Actions',
    items: [
      {
        name: 'Client Component Usage',
        slug: 'client-serveraction',
        description:
          'Create meaningful Loading UI for specific parts of an app',
      }
    ],
  },
  {
    name: 'Server Actions in Non Form Elements',
    items: [
      {
        name: 'useTransition',
        slug: 'serveractions-useTransition',
        description:
          'Streaming data fetching from the server with React Suspense',
      }
    ],
  },
  {
    name: 'Last Demo',
    items: [
      {
        name: 'Byee !!',
        slug: 'byee',
        description:
          'Pass context between Client Components that cross Server/Client Component boundary',
      },
    ],
  }
];
