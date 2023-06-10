import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>

      <a href="https://www.linkedin.com/in/yin-sun-66b74a170">
      <BsLinkedin />
      </a>
      
      
    </div>
    <div>
      <a href="https://github.com/yin02">
      <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/profile.php?id=100022642830223">
      <FaFacebookF />
      </a>
    </div>

  </div>
);

export default SocialMedia;