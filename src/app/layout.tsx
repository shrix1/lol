import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ClientBody from './ClientBody';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Discord - Group Chat That’s All Fun & Games',
  description:
    'Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out.',
  openGraph: {
    type: 'website',
    siteName: 'Discord',
    title: 'Discord - Group Chat That’s All Fun & Games',
    description:
      'Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out.',
    images: ['https://cdn.discordapp.com/assets/og_img_discord_home.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@discord',
    creator: '@discord',
  },
  icons: {
    icon: 'https://discord.com/assets/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
