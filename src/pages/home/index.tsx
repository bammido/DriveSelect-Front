/* eslint-disable @typescript-eslint/no-explicit-any */

import { Outlet } from "react-router-dom";


export default function Home() {
    

    return <div className="flex flex-col justify-center items-center gap-6 p-8">
        <Outlet />
    </div>
}