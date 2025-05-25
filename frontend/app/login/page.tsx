import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-2xl font-bold">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">⚽</span>
            </div>
            <span className="text-gradient">SportPredictor</span>
          </Link>
          <h1 className="text-2xl font-bold mt-6 mb-2">Welcome Back</h1>
          <p className="text-slate-400">Sign in to your account to continue</p>
        </div>

        <LoginForm />

        <p className="text-center text-sm text-slate-400 mt-6">
          Don't have an account?{" "}
          <Link href="/signup" className="text-emerald-400 hover:text-emerald-300 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
