import LoginForm from "../../../components/components/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative bg-white min-h-screen w-full flex items-center justify-center">
      <LoginForm />
    </div>
  );
}
