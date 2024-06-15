import Image from "next/image";

const logo = "/images/plexus_logo.png";
const LogoIcon = () => {
    return (
        <Image
            src={logo}
            alt="logo"
            width={150}
            height={150}
            style={{
                maxWidth: "100%",
                height: "auto",
            }}></Image>
    );
};

export default LogoIcon;
