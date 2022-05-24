import React, {useEffect, useState} from 'react';


const getWindowDimensions = () => {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
};

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
};

export const GetViewport = () => {
    const {height, width} = useWindowDimensions();

    return (
        <h4 style={{
            marginBottom: '10px',
            border: '1px solid black',
            padding: '5px',
            borderRadius: '15px'
        }}>
            width: {width} x height: {height}
        </h4>
    );
};

