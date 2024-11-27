import { useEffect, useState } from "react";

export default function useUpdateAspectRatio() {
    const [aspectRatio, setAspectRatio] = useState("3 / 1");

    useEffect(() => {
        const updateAspectRatio = () => {
            setAspectRatio(window.innerWidth < 500 ? "1 / 1" : "3 / 1");
        };

        // Atualiza ao carregar e redimensionar
        updateAspectRatio();
        window.addEventListener("resize", updateAspectRatio);

        return () => window.removeEventListener("resize", updateAspectRatio);
    }, []);

    return { aspectRatio }
}