import './globals.css';

export const metadata = {
  title: 'Beauty Image Spa | Luxury Nail Salon & Beauty Services',
  description:
    'Beauty Image Spa offers premium manicures, pedicures, gel nails, acrylics, nail art, and beauty spa treatments in a clean, elegant setting.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
