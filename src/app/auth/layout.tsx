import AuthWrapper from "./components/auth-wrapper/auth-wrapper";


export default function AuthLayout({ children }: { children: React.ReactElement }) {

  return (
    <AuthWrapper>{children}</AuthWrapper>
  );
}