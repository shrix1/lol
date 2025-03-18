import React from 'react';

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="antialiased" suppressHydrationWarning>
      {children}
    </body>
  );
}
