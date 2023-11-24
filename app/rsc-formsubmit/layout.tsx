import React from 'react';

const title = 'RSC';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  let categories = []
  return (
    <div>{children}</div>
  );
}
