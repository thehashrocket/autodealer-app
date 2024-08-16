import { notFound } from 'next/navigation'
import Image from 'next/image'

const FeaturedVehicle = ({ image, name, description }: { image: string; name: string; description: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <Image src={image} alt={name} width={400} height={300} className="w-full h-48 object-cover mb-4 rounded" />
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
            View Inventory
        </button>
    </div>
)

type DealerInfo = {
    name: string;
    address: string;
    phone: string;
    website: string;
    featuredVehicles: Array<{
        image: string;
        name: string;
        description: string;
    }>;
};

async function getDealerInfo(name: string): Promise<DealerInfo | null> {
    // This would normally be an API call or database query
    const dealers: Record<string, DealerInfo> = {
        'manteca-toyota': {
            name: 'Manteca Toyota',
            address: "123 Main St, Manteca, CA 95337",
            phone: "(123) 456-7890",
            website: "https://www.mantecatoyota.com",
            featuredVehicles: [
                { image: "/cars/toyota1.png", name: "2024 Toyota Camry", description: "Midsize Sedan" },
                { image: "/cars/toyota2.png", name: "2024 Toyota RAV4", description: "Compact SUV" },
                { image: "/cars/toyota3.png", name: "2024 Toyota Tundra", description: "Full-size Pickup" },
            ]
        },
        'manteca-ford': {
            name: 'Manteca Ford',
            address: "456 Elm St, Manteca, CA 95337",
            phone: "(123) 456-7890",
            website: "https://www.mantecaford.com",
            featuredVehicles: [
                { image: "/cars/ford1.png", name: "2024 Ford Mustang", description: "Sports Car" },
                { image: "/cars/ford2.png", name: "2024 Ford Explorer", description: "Midsize SUV" },
                { image: "/cars/ford3.png", name: "2024 Ford F-150", description: "Full-size Pickup" },
            ]
        },
        'manteca-chevrolet': {
            name: 'Manteca Chevrolet',
            address: "789 Oak St, Manteca, CA 95337",
            phone: "(123) 456-7890",
            website: "https://www.mantecachevy.com",
            featuredVehicles: [
                { image: "/cars/chevy1.png", name: "2024 Chevrolet Corvette", description: "Sports Car" },
                { image: "/cars/chevy2.png", name: "2024 Chevrolet Equinox", description: "Compact SUV" },
                { image: "/cars/chevy3.png", name: "2024 Chevrolet Silverado", description: "Full-size Pickup" },
            ]
        },
        'manteca-honda': {
            name: 'Manteca Honda',
            address: "101 Pine St, Manteca, CA 95337",
            phone: "(123) 456-7890",
            website: "https://www.mantecahonda.com",
            featuredVehicles: [
                { image: "/cars/honda1.webp", name: "2024 Honda Civic", description: "Compact Car" },
                { image: "/cars/honda2.webp", name: "2024 Honda CR-V", description: "Compact SUV" },
                { image: "/cars/honda3.webp", name: "2024 Honda Ridgeline", description: "Midsize Pickup" },
            ]
        },
        // Add other dealers here
    };

    return dealers[name] ?? null;
}

export default async function DealerPage({ params }: { params: { name: string } }) {
    const dealerInfo = await getDealerInfo(params.name)

    if (!dealerInfo) {
        notFound()
    }

    return (
        <div className="container mx-auto px-4">
            <header className="py-8 mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-b-lg">
                <h1 className="text-4xl font-bold text-center">{dealerInfo.name}</h1>
            </header>

            <main className="grid md:grid-cols-2 gap-8">
                <section className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                    <p className="mb-2">{dealerInfo.address}</p>
                    <p className="mb-2">Phone: {dealerInfo.phone}</p>
                    <p>Website: <a href={dealerInfo.website} className="text-blue-500 hover:underline">{dealerInfo.website}</a></p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Featured Vehicles</h2>
                    <div className="grid gap-6">
                        {dealerInfo.featuredVehicles.map((vehicle, index) => (
                            <FeaturedVehicle key={index} {...vehicle} />
                        ))}
                    </div>
                </section>
            </main>

            <footer className="mt-12 py-6 text-center text-gray-600">
                <p>&copy; 2024 {dealerInfo.name}. All rights reserved.</p>
            </footer>
        </div>
    )
}