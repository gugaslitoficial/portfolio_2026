import { Suspense } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Stack } from '@/components/sections/Stack'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'
import { ProjectsSkeleton } from '@/components/sections/ProjectsSkeleton'

export default function Page() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects />
        </Suspense>
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
