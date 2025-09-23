"use client"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#24243e] flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Srikanth Portfolio
          </span>
        </h1>
        <p className="text-xl text-slate-100/90 mb-8">
          Building delightful, high-performance web apps. Restoring full content next.
        </p>
        <div className="text-slate-300">
          Production check: minimal page uses only HTML and Tailwind. If this builds, we’ll re-add sections.
        </div>
      </div>
    </div>
  )
}
