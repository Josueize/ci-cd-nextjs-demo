export const metadata = {
  title: "CI/CD Demo",
  description: "Next.js CI/CD Pipeline Demo"
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
