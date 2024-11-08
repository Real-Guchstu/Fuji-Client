import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Zap, Shield, Gauge } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Fuji Client</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-gray-300">Features</a></li>
            <li><a href="#download" className="hover:text-gray-300">Download</a></li>
            <li><a href="https://github.com/your-github-repo" className="hover:text-gray-300">GitHub</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow">
        <section className="text-center py-20">
          <h2 className="text-5xl font-bold mb-4">Fuji Client 1.8.8</h2>
          <p className="text-xl mb-8">Enhance your Minecraft experience with Fuji Client</p>
          <Button className="bg-white text-black hover:bg-gray-200" size="lg">
            <ArrowDown className="mr-2 h-4 w-4" /> Download Now
          </Button>
        </section>
        <section id="features" className="py-20 bg-white text-black">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Performance Boost</h3>
                <p>Optimized for smooth gameplay and higher FPS</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Anti-Cheat Compatible</h3>
                <p>Play on your favorite servers without issues</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Gauge className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Customizable HUD</h3>
                <p>Personalize your gaming interface</p>
              </div>
            </div>
          </div>
        </section>
        <section id="download" className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to elevate your Minecraft experience?</h2>
          <p className="mb-8">Download Fuji Client 1.8.8 now and join the community!</p>
          <Button className="bg-white text-black hover:bg-gray-200" size="lg">
            <ArrowDown className="mr-2 h-4 w-4" /> Download Fuji Client 1.8.8
          </Button>
        </section>
      </main>
      <footer className="bg-white text-black py-6 text-center">
        <p>&copy; 2024 Fuji Client. All rights reserved.</p>
        <a href="https://github.com/your-github-repo" className="inline-flex items-center mt-2 text-black hover:text-gray-600">
          <Github className="mr-2 h-4 w-4" />
          View on GitHub
        </a>
      </footer>
    </div>
  )
}
