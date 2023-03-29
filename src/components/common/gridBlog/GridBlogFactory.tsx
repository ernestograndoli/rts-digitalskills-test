import { Grid } from '@mui/material';
import { ICardBlog } from "../../../interfaces/IGridBlogFactory";
import BlogComponent from './BlogComponent';

interface IGridBlogFactoryProps {
    items : any;
}

const linkBlogCard : React.CSSProperties = {
    cursor : "pointer", 
    textDecoration : "none"
}

export default function GridBlogFactory(props : IGridBlogFactoryProps) {
    const { items } = props;
    
    return (
        <Grid container className="gridFlexColumn">
            <Grid item md={12} xs={12}>
            {
                items.cards.map((item : ICardBlog, index : number) => {
                    const hr = index < items.cards.length-1 ? true : false;
                    return (
                        <a href={item.link?.to} style={linkBlogCard}>
                            <BlogComponent item={item} key={index} hr={hr}/>
                        </a>                        
                    )
                })                
            }
            </Grid>                
        </Grid> 
    )
}