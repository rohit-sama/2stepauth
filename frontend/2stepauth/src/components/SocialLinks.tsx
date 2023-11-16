import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <div className="flex justify-center  gap-4 p-4">
      <Link
        href="https://github.com/rohit-sama"
        target="_blank"
        className="flex gap-2 hover:text-gray-400 decoration-gray-400 text-gray-600 underline-offset-4 underline"
      >
        <FontAwesomeIcon icon={faGithub} height={25} />
      </Link>
      <Link
        href="https://linkedin.com/"
        target="_blank"
        className="flex gap-2 hover:text-gray-400 decoration-gray-400 text-gray-600 underline-offset-4 underline"
      >
        <FontAwesomeIcon icon={faLinkedin} height={25} />
      </Link>

      <Link
        href="https://twitter.com/rohitfrx"
        target="_blank"
        className="flex gap-2 hover:text-gray-400 decoration-gray-400 text-gray-600 underline-offset-4 underline"
      >
        <FontAwesomeIcon icon={faTwitter} height={25} />
      </Link>
    </div>
  );
};

export default SocialLinks;
