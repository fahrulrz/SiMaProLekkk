// src/app/(auth)/layout.tsx
import Navbar from "../../components/Navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-layout">
      {/* Layout khusus untuk main page */}

      {/* navbar start */}
      <div className="sticky top-0 left-0 right-0">
        <Navbar />
      </div>

      {/* navbar end */}
      {children}
    </div>
  );
}
