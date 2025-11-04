import { useEffect, useRef, useState } from 'react'
export function UseFetch(url)
{
    const [post , SetPost] = useState({});
    const [loading , setLoading] = useState(true); 
    async function getdetails()
    {
        setLoading(true);
        const data = await fetch(url);
        const realdata = await data.json();
        SetPost(realdata);
        setLoading(false);
    }
    useEffect(function()
    {   
        const timer = setInterval(function()
        {
            getdetails();
        },5000);

        return function()
        {
            clearInterval(timer);
        }
    })
    useEffect(
        function()
        {
            getdetails();
        },[url]
    );
    return {post , loading};
}