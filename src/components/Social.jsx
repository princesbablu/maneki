import logo_1 from '../assets/img/social/telegram.png'
import logo_2 from '../assets/img/social/standflow.png'
import logo_3 from '../assets/img/social/twitter.png'
import logo_4 from '../assets/img/social/dextool.png'

import { telegram, standflow, twitter, dextools } from './SocialLinks'


export default function Social({ className }) {
  const socialIcons = [
    {
      name: 'telegram',
      icon: logo_1,
      url: telegram,
      color:'#FFFFFF'
    },
    {
      name: 'standflow',
      icon: logo_2,
      url: standflow,
      color:'#FF0014'
    },
    {
      name: 'twitter',
      icon: logo_3,
      url: twitter,
      color:'#537293'
    },
    {
      name: 'dextools',
      icon: logo_4,
      url: dextools,
      color:'#5398F3'
    },
  ];
  return (
    <ul className={`social-list d-flex align-items-center flex-wrap gap-2 ${className}`}>
      {socialIcons.map((item, index) => (
        <li key={index}>
          <a href={item.url} target="_blank" className="social-link d-flex align-items-center justify-content-center rounded-pill" style={{backgroundColor:item.color}}>
            <img src={item.icon} alt="" />
          </a>
        </li>
      ))}
    </ul>
  )
}