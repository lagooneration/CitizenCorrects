import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '@/components/sections';


const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

// export default function Home() {
//   return (
//     <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500 to-blue-500">
//       <Navbar />
//       <div className="space-y-6 text-center">
//         <h1
//           className={cn(
//             "text-6xl font-semibold text-white drop-shadow-md",
//             font.className
//           )}
//         >
//           🔐 Auth
//         </h1>
//         <p className="text-white text-lg">A simple authentication service!</p>
//         <div>
//           <LoginButton asChild>
//             <Button variant="secondary" size="lg">
//               Sign In
//             </Button>
//           </LoginButton>
//         </div>
//       </div>
//     </main>
//   );
// }



export default function Home() {
  return (
    <div className="bg-primary overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
  );
}