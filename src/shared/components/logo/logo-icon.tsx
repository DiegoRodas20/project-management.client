import Image from "next/image";

const logo = 'public/assets/plexus_logo.png';
const LogoIcon = () => { 

    return (<Image src={logo} alt="logo"></Image>);
}

export default LogoIcon;