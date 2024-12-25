import { Footer } from "@/components/pages/footer";
import Portfolio from "@/components/pages/portolio";

export const metadata = {
  title: 'Asif Shariar Likhon - Strategic Growth Architect & Business Developer',
  description: 'Portfolio of Asif Shariar Likhon, a dynamic Business Development Specialist with extensive experience in growth strategies, client acquisition, and digital marketing.',
}


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}