import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import { Mail, Facebook, Youtube, Instagram} from 'lucide-react'


export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a href='mailto:contato.prof.igorbruno@gmail.com' title='Entre em contato'><Mail /></a>
          <a href='https://www.facebook.com/profile.php?id=100010885745996' title='Perfil do Facebook'><Facebook /></a>
          <a href='https://www.youtube.com/@matematicacomcuscuz' title='Canal do Youtube'><Youtube /></a>
          <a href='https://www.instagram.com/profigorbrunoocuscuz/' title='Perfil do instagram'><Instagram /></a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/felipe-sbm">
            Criado por Felipe SBM 🤓
          </Link>
        </div>
      </div>
    </footer>
  )
}
