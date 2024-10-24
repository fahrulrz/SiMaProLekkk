import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SiMaPro",
  description: "Copyright © 2024 SiMaPro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

// export default function RootLayout({children}: {children: React.ReactNode}) {
//   const pathname = usePathname();
//   const isAuthPage = pathname.startsWith("/(auth)");
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         {isAuthPage ? (
//           <div>{children}</div>
//         ) : (
//           <div>
//             <h1>Ini adalah navbar dari root layout</h1>
//             <div>{children}</div>
//           </div>
//         )}
//       </body>
//     </html>
//   );
// }

// const RootLayout = ({ children }: { children: React.ReactNode }) => {
//   const router = useRouter();

//   // Mengecek halaman pengecualian penggunaan
//   if (router.pathname === "/login" || router.pathname === "/reset-password") {
//     return <>{children}</>;
//   }

//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         {children}
//       </body>
//     </html>
//   );
// }

// export default RootLayout;
