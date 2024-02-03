import ReduxProvider from "@/redux/Provider";

import "./globals.css";

export const metadata = {
  title: "Dummy_ecommerce_shopping_app",
  description: "Discover the city in style with our Urban Explorer Collection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`w-screen min-h-screen relative`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
