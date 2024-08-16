import Link from 'next/link'

const DealerBox = ({ name, logo, tagline }: { name: string, logo: string, tagline: string }) => (
  <Link href={`/dealer/${name.toLowerCase()}`} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <img src={logo} alt={`${name} logo`} className="w-24 h-24 mx-auto mb-4" />
    <h3 className="text-xl font-bold text-center mb-2">{name}</h3>
    <p className="text-gray-600 text-center">{tagline}</p>
  </Link>
)

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <header className="py-8 mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-b-lg">
        <h1 className="text-4xl font-bold text-center mb-2">MantecaCars.com</h1>
        <p className="text-xl text-center">New and Used Cars, Trucks and SUV's</p>
      </header>

      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DealerBox name="Manteca Toyota" logo="/logos/toyota.png" tagline="Your Toyota Dealer" />
          <DealerBox name="Manteca Ford" logo="/logos/ford.png" tagline="Built Ford Tough" />
          <DealerBox name="Manteca Chevrolet" logo="/logos/chevy.png" tagline="Find New Roads" />
          <DealerBox name="Manteca Honda" logo="/logos/honda.png" tagline="The Power of Dreams" />
        </section>
      </main>

      <footer className="mt-12 py-6 text-center text-gray-600">
        <p>&copy; 2024 MantecaCars.com. All rights reserved.</p>
      </footer>
    </div>
  )
}