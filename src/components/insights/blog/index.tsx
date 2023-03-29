import { Container, Grid } from '@mui/material';
import { blogInfo } from "../../../data/insights/blog/data";
import GridBlogFactory from "../../common/gridBlog/GridBlogFactory";

const hrStyle : React.CSSProperties = {
    width : "85%",
    border : "none",
    height : "0.40rem",
    color : "#E4E4E4",
    background: "#E4E4E4 0% 0% no-repeat padding-box",
    opacity : 0.6,
    margin : "auto",
    padding : "0"
}

export default function Index() {
    return(
        <Container id="blog" maxWidth={false} disableGutters={true} sx={{marginBottom : "8rem", p : 0}}>
            <Grid container sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <Grid item md={12} xs={12} sx={{paddingBottom : "3em"}}>
                    <h1 className="titleModule">Blog</h1>
                </Grid>
                <GridBlogFactory items={blogInfo}/>
                <div style={{textAlign: "center", width : "100%", marginTop : "2.81rem"}}>
                    <a href="/" target="_self">
                        <button className="button dark upperCase">GO TO BLOG</button>
                    </a>
                </div>
                <div style={{textAlign: "center", width : "100%", marginTop : "4.56rem"}}>
                    <hr style={hrStyle}/>
                </div>           
            </Grid>           
        </Container>
    )
}