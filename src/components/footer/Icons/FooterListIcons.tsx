import React from 'react'
import { FooterFacebook } from './FooterFacebook';
import { FooterInstagram } from './FooterInstagram';
import { FooterTwitter } from './FooterTwitter';
import { FooterLinkedIn } from './FooterLinkedIn';

export default function FooterListIcons() {
  return (
    <ul className="footerList">
      <FooterFacebook />
      <FooterInstagram />
      <FooterTwitter />
      <FooterLinkedIn />
    </ul>
  );
}
