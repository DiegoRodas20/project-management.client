import AppBar, { AppBarProps } from '@mui/material/AppBar';
import { alpha } from '@mui/material/styles';
import MainHeader from './main-header';

const appBar: AppBarProps = {
    position: 'fixed',
    elevation: 0,
    sx:
    {
        bgcolor: alpha('#000000', 0.8),
        backdropFilter: 'blur(8px)',
        zIndex: 1200,
        width: '100%'
    }
};

const Header = () => {
    return (<AppBar {...appBar}>{MainHeader}</AppBar>)
}

export default Header