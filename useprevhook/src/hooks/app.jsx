import { useEffect , useState , useRef} from 'react'

export function UsePrev(value)
{
    const ref = useRef();
    useEffect(function()
    {
        ref.current = value;
    } , [value]);
    
    return ref.current;
}
