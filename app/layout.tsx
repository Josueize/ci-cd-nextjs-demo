import '../styles/globals.css';

export const metadata = {
  title: 'MEU CI/CD Demo – Next.js App',
  description: 'CI/CD demo application built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
