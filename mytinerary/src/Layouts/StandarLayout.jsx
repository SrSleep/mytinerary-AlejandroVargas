import React from "react";
import { Outlet } from "react-router-dom";

export default function StandarLayout() {
    return (
        <>
            
            <main>
                <Outlet></Outlet>
            </main>
            
        </>
    );
}
