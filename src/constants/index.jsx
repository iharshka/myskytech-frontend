import { MonitorPlay } from "lucide-react";
import { FolderCode } from "lucide-react";
import { ChartSpline } from "lucide-react";
import { Unplug } from "lucide-react";
import { Handshake } from "lucide-react";
import { Shield } from "lucide-react";
// import { Gauge } from "lucide-react";

export const navItems = [
    {label: "About", href: "#about"},
    {label: "Services", href: "#services"},
    {label: "Testimonials", href: "#testimonials"},
    {label: "Reach out to us", href: "#contact"},
];

export const testimonials = [
    {
        user: "John Doe",
        company: "Stellar Solutions",
        image: "https://plus.unsplash.com/premium_photo-1681489930334-b0d26fdb9ed8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29ycG9yYXRlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
        text: "Harsh is very hardworking person. I was very satisfied with the services provided!"
    },
    {
        user: "Johnny Doing",
        company: "Stellary Business",
        image: "https://plus.unsplash.com/premium_photo-1683121771856-3c3964975777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvcnBvcmF0ZSUyMGltYWdlfGVufDB8fDB8fHww",
        text: "Harsh is very hardworking person. I repeat the same thing as John said. I was very satisfied with the services provided!"
    },
];

export const servicesOffered = [
    {
        icon: <MonitorPlay />,
        text: "Custom Software Development",
        description: "Tailored software solutions designed to meet your unique business needs. End-to-end development services from planning and design to implementation and support.",
    },
    {
        icon: <FolderCode />,
        text: "Web Development",
        description: "Creating responsive, user-friendly, and visually appealing websites. Expertise in e-commerce platforms, content management systems, and custom web applications.",
    },
    {
        icon: <ChartSpline />,
        text: "Data Analytics & Intelligence",
        description: "Transforming data into actionable insights for smarter decision-making. Comprehensive analytics solutions including data visualization, reporting, and predictive modeling.",
    },
    {
        icon: <Unplug />,
        text: "Cloud Solutions",
        description: "Scalable and secure cloud services to enhance operational efficiency. Cloud migration, management, and optimization tailored to your business requirements.",
    },
    {
        icon: <Handshake />,
        text: "IT Consulting and Strategy",
        description: "Expert guidance to align your IT infrastructure with your business objectives. Strategic planning, risk assessment, and technology roadmaps to drive growth and innovation.",
    },
    {
        icon: <Shield />,
        text: "Cybersecurity",
        description: "Robust security solutions to protect your digital assets and sensitive information. Comprehensive security assessments, threat mitigation, and compliance services.",
    },
    // {
    //     icon: <Gauge />,
    //     text: "Managed IT Services",
    //     description: "Proactive IT support and maintenance to ensure seamless operations. 24/7 monitoring, help desk support, and network management for uninterrupted business continuity.",
    // },
];