import React, { useRef } from 'react'
import PropTypes from "prop-types";
import Pdf from "react-to-pdf";
import { Button, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: "80%",
        margin: "2rem auto",
        padding: "1rem",
        background: "white",
        borderRadius: "10px",
        "@media (min-width: 992px)": {
            maxWidth: "800px",
        },
    },
    button: {
        border: "none",
        borderRadius: "5px",
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: "#29b6f6",
        height: "36px",
        padding: "0 1.5rem",
        marginLeft: "0.5rem",
    },
}));

const DownloadPdf = (props) => {
    const classes = useStyles();
    const options = {
        orientation: 'potrait',
        unit: 'in',
        format: [props.height / 96, 8.26]
    };

    return (
        <Grid
            container
            className={classes.container}
            style={{ flexDirection: "column" }}
        >
            <Pdf targetRef={props.resume} filename="github-resume.pdf" options={options}>
                {({ toPdf }) => <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={toPdf}
                >
                    Download as PDF
                </Button>}
            </Pdf>
        </Grid>
    )
}

DownloadPdf.propTypes = {
    resume: PropTypes.object.isRequired,
    height: PropTypes.number.isRequired
};

export default DownloadPdf