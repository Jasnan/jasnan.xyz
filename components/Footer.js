import metadata from '@/data/metadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center my-8">
        <div className="flex space-x-4">
          <SocialIcon kind="github" href={metadata.github} size="6" />
          <SocialIcon kind="mail" href={`mailto:${metadata.email}`} size="6" />
        </div>
      </div>
    </footer>
  )
}
