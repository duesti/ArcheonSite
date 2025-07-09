
import { Header } from "@/components/Header"

export default function Map() {
    return (
        <main className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
            
            <Header />

            <iframe
                src={process.env.mapLink}
                allowFullScreen
                className='w-screen h-screen border-0 z-10 self-center mt-[-106px]'
            />

        </main>

        
    )
}