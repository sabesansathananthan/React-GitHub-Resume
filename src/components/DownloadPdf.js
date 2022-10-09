import React from 'react';
import PropTypes from "prop-types";
import Pdf from "react-to-pdf";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    button: {
        border: "none",
        borderRadius: "5px",
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: "#29b6f6",
        height: "36px",
        padding: "0 1.5rem",
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
        <Pdf targetRef={props.resume} filename="github-resume.pdf" options={options}>
            {({ toPdf }) => <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={toPdf}
            ><i className='fas fa-solid fa-download'>&nbsp;</i>
                Download
            </Button>}
        </Pdf>
    )
}

DownloadPdf.propTypes = {
    resume: PropTypes.object.isRequired,
    height: PropTypes.number.isRequired
};

export default DownloadPdf