import ButtonBase from '@mui/material/ButtonBase';
import LogoIcon from './logo-icon';
import { SxProps } from '@mui/system';

interface Props {
    sx?: SxProps;
}

const Logo = ({ sx }: Props) => (
    <ButtonBase disableRipple sx={sx}>
        <LogoIcon></LogoIcon>
    </ButtonBase>
)

export default Logo;