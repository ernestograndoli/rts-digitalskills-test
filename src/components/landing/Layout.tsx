import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface ILayoutProps {
    children : JSX.Element;
}

export default function Layout(props : ILayoutProps) : JSX.Element {
    const { children } = props;
    const { pathname } = useLocation();
    
    return (        
        <Container maxWidth={false} disableGutters={true} sx={{m : 0, p : 0}}>
            <Header route={pathname}/>
            {children}
            <Footer/>
        </Container>
    )
}