import {  BadgeQuestionMark, BookA, LayoutTemplate, SquarePen, ShoppingBag, MessageSquareHeart, Mail, UserPen } from "lucide-react";

export const headerData = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about", 
        submenu: [
            { title: "FAQS", href: "/faq", icon: BadgeQuestionMark },
            { title: "About Us", href: "/about", icon: BookA },
        ],
    },
    { title: "Services", href: "/services",
        submenu: [
            { title: "Website Design", href: "/websitedesign", icon: LayoutTemplate },
            { title: "SEO & Content Marketing", href: "/seo&content", icon: SquarePen },
            { title: "Ecommerce Solutions", href: "/ecommercesolutions", icon: ShoppingBag },
            { title: "Social Media Creation", href: "/socialmediacreation", icon: MessageSquareHeart },
            { title: "Branding", href: "/branding", icon: UserPen },
            { title: "Email Marketing", href: "/emailmarketing", icon: Mail },
        ],
     },
    { title: "Clients", href: "/clients" },
];

export const quickLinksData = [
    { title: "About", href: "/about" },
    { title: "FAQ", href: "/faq" },
    { title: "Clients", href: "/clients" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
];

export const categoriesData = [
    { title: "Website Design", href: "/websitedesign" },
    { title: "SEO & Content Marketing", href: "/seo&content" },
    { title: "Ecommerce Solutions", href: "/ecommercesolutions" },
    { title: "Social Media Creation", href: "/socialmediacreation" },
    { title: "Branding", href: "/branding" },
    { title: "Email Marketing", href: "/emailmarketing" },
]