import { CiMail } from "react-icons/ci";
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="my-5 flex items-center justify-center">
      <a
        href="https://www.linkedin.com/in/serhatkaya-dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#75B7E5]"
        aria-label="Linkedin"
      >
        <FaLinkedinIn className="h-7 w-7" />
      </a>

      <a
        href="https://github.com/Serhathub"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#75B7E5]"
        aria-label="Github"
      >
        <FaGithub className="h-7 w-7" />
      </a>

      <a
        href="mailto:serhatkaya@outlook.be"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#75B7E5]"
        aria-label="Instagram"
      >
        <CiMail className="h-7 w-7" />
      </a>
    </div>
  );
};

export default SocialIcons;
