import {useEffect, useRef, useState} from "react";

export default function useHoverTodoItem (ref) {

const [isHovering, setHovering] = useState(false)


    const on = () => setHovering(true)
    const off = () => setHovering(false)

    useEffect(() => {
        if (!ref.current) {
            return
        }

        const node = ref.current;

        node.addEventListener("mouseenter", on)
        node.addEventListener("mousemove", on)
        node.addEventListener("mouseleave", off)

        return function (){
            node.removeEventListener("mouseenter", on)
            node.removeEventListener("mousemove", on)
            node.removeEventListener("mouseleave", off)
        }

    }, []);

    return isHovering;
}

/*

const ref = useRef()                    //  при помощи хука useRef мы можем получить доступ к требуемому DOM элементу
    const isHovering = useHover(ref)    //  мы инициализируем функцию


<div ref={ref}></div>              //  при помощи свойства ref={ref} мы цепляем функцию к DOM элементу


 */


