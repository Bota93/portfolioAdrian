import { useEffect, useState } from "react";

const useActiveSection = (sectionIds) => {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveId(id);
                }
            },
            {
                threshold: 0.6,
            }
        );

        observer.observe(section);
        observers.push(observer);
    });

    return () => {
        observers.forEach((observer) => observer.disconnect());
    };
}, [sectionIds]);

return activeId;
};

export default useActiveSection;