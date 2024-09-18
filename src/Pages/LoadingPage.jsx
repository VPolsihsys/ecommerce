import React, { useEffect } from 'react';
import '../Styles/global.css';

const LoadingPage = ({ setIsLoading }) => {
    useEffect(() => {
        const loaderContainer = document.querySelector('.loader-container');

        // Show the loader container
        loaderContainer.style.display = 'flex';

        // Disable scrolling when the loader is displayed
        document.body.style.overflow = 'hidden';

        // Hide the loader container and enable scrolling after 2.5 seconds
        const timeoutId = setTimeout(() => {
            loaderContainer.style.display = 'none';
            document.body.style.overflow = 'auto';
            setIsLoading(false); // Notify the parent component that loading is complete
        }, 2500);

        // Clear the timeout on component unmount
        return () => clearTimeout(timeoutId);
    }, [setIsLoading]);

    return (
        <div className="loader-container">
            <div className="loader">

            </div>
        </div>
    );
};

export default LoadingPage;
