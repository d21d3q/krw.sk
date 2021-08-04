import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCompass } from '@fortawesome/free-regular-svg-icons'
import Obfuscate from 'react-obfuscate';
import { StaticImage } from "gatsby-plugin-image"
// import ProfileImage from "../../images/profile.png"


const Header = () => {
  return (
    <div className="px-10 py-6">
      <div className="flex border-b border-neutral-400">
        <div className="flex-auto">
          <div className="flex items-center">
            <h1 className="text-primary-500 text-4xl">Zdzisław Krajewski</h1>
            <span className="ml-3 text-lg text-neutral-400">[ˈʑʥ̑iswaf krajefski]</span>
          </div>
          <h2 className="text-2xl">Full stack engineer</h2>
        </div>
        <div className="flex-none m-3">
          <div>
            <FontAwesomeIcon size="lg" className="mr-2" icon={faWhatsapp}/> 
            <Obfuscate tel="+48 691773622"/>
          </div>
          <div>
            <FontAwesomeIcon size="lg" className="mr-2" icon={faEnvelope}/> 
            <Obfuscate tel="zdzislaw@krw.sk"/>
          </div>
          <div>
            <FontAwesomeIcon size="lg" className="mr-2" icon={faCompass}/> 
            Wrocław, Poland
          </div>
        </div>
      </div>
      <div className="flex border-b border-neutral-400 items-center">
        <StaticImage
          className="m-6 rounded-full flex-none"
          src="../../images/profile.png"
          // src={ProfileImage}
          alt="profile image"
          placeholder="blurred"
          aspectRatio={1}
          height={200}
        />
        <p className="flex-1 ml-3  text-lg">
          I am full stack developer with "can do" attitude, leaning towards backend, 
          devops with background in embedded electronics (IoT) and mechatronics (production systems).
          Interest in broad number of industrial fields will pay off in your project.
        </p>
      </div>
    </div>
  )
}

export default Header