import { Linkedin, Instagram, Youtube } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">

      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="text-orange-500">Nexora</span>

        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-orange-500 transition">FAQs</a>
          <a href="#" className="hover:text-orange-500 transition">Refund Policy</a>
          <a href="#" className="hover:text-orange-500 transition">Contact Us</a>
          <a href="#" className="hover:text-orange-500 transition">Success Stories</a>
          <a href="#" className="hover:text-orange-500 transition">Terms and Conditions</a>
          <a href="#" className="hover:text-orange-500 transition">Privacy Policy</a>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

          {/* Address + Copyright */}
          <div className="text-gray-600 text-sm space-y-2">
            <p>© 2024 Nexora. All rights reserved</p>
            {/* <p>
              Address: Priska Pride Tower, A-42/4, 7th Floor, Block-A,
              Sector 62, Noida, Uttar Pradesh - 201301
            </p> */}
            <p>Ph. No: +91 9354103871</p>
          </div>

          {/* Social Icons */}
          {/* <div className="flex gap-4">
            <SocialIcon>
              <Linkedin size={18} />
            </SocialIcon>
            <SocialIcon>
              <Instagram size={18} />
            </SocialIcon>
            <SocialIcon>
              <Youtube size={18} />
            </SocialIcon>
          </div> */}

        </div>
      </div>

    </footer>
  )
}

// type SocialIconProps = {
//   children: React.ReactNode
// }

// const SocialIcon: React.FC<SocialIconProps> = ({ children }) => {
//   return (
//     <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition cursor-pointer">
//       {children}
//     </div>
//   )
// }

export default Footer
