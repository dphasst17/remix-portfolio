import React from "react"import {IconPlus} from "@tabler/icons-react";const CardPlus = ({height, content}: { height: string, content: React.ReactNode }) => {    return <div className={`border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start p-4 relative h-[${height}]`}>        <IconPlus className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />        <IconPlus className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />        <IconPlus className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />        <IconPlus className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />        {content}    </div>}export default CardPlus