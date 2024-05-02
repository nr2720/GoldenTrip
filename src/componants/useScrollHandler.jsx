import { useState, useEffect } from 'react';

export const useScrollHandler = () => {
    //setting intial value to true
    const [scroll, setScroll] = useState(1);

    //running on mount
    useEffect(() => {
        const onScroll = () => {
            const scrollCheck = window.scrollY < 10;
            if(scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        }

        //setting up the event handler from Web API
        document.addEventListener('scroll', onScroll);

        //cleaning the web api
        return () => {
            document.removeEventListener('scroll', onScroll);
        }
    }, [scroll, setScroll])

    return scroll;
}

