import React from 'react'

const Layouts = ({ children }: { children: React.ReactNode }) => {
    return <div className='min-h-screen'>
        {children}
    </div>
}

export default Layouts