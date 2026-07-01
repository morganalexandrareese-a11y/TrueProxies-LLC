import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TrueProxies LLC - Premium Proxy Services',
  description: 'Reliable proxy services for Canada, USA, and Australia. Premium performance for individuals and businesses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
