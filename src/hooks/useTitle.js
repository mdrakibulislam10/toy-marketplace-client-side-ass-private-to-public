import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Little Cars | ${title}`;
    }, [title])
}

export default useTitle;