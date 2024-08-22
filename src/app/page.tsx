import Link from 'next/link'
import Image from 'next/image'

const DealerBox = ({ name, logo, tagline, link_name }: { name: string, logo: string, tagline: string, link_name: string }) => (
  <Link href={`/dealer/${link_name.toLowerCase()}`} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <Image src={logo} alt={`${name} logo`} width={96} height={96} className="mx-auto mb-4" />
    <h3 className="text-xl font-bold text-center mb-2">{name}</h3>
    <p className="text-gray-600 text-center">{tagline}</p>
  </Link>
)

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <header className="py-0 mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-b-lg">
        <Image src="/banners/MantecaCars.jpg" alt="MantecaCars.com" width={1085} height={389} />
      </header>

      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DealerBox name="Manteca Toyota" logo="/logos/toyota.png" tagline="Your Toyota Dealer" link_name="manteca-toyota" />
          <DealerBox name="Manteca Ford" logo="/logos/ford.png" tagline="Built Ford Tough" link_name="manteca-ford" />
          <DealerBox name="Manteca Chevrolet" logo="/logos/chevy.png" tagline="Find New Roads" link_name="manteca-chevrolet" />
          <DealerBox name="Manteca Honda" logo="/logos/honda.png" tagline="The Power of Dreams" link_name="manteca-honda" />
        </section>
      </main>

      <footer className="mt-12 py-6 text-center text-gray-600">
        <p>&copy; 2024 MantecaCars.com. All rights reserved.</p>
      </footer>
    </div>
  )
}