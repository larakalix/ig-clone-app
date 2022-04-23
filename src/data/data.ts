import { useId } from "react";
import {
    BiGridAlt,
    BiBarChartAlt2,
    BiBell,
    BiEnvelope,
    BiSlider,
    BiSearch,
} from "react-icons/bi";
import { NavItem } from "../models/NavItem";
import { Story } from "../models/Stories";
import { User } from "../models/Users";

export const NavbarItems: NavItem[] = [
    {
        label: "Feed",
        route: "/",
        icon: BiGridAlt,
    },
    {
        label: "Explore",
        route: "/explore",
        icon: BiSearch,
    },
    {
        label: "Notifications",
        route: "/notifications",
        icon: BiBell,
        counter: 4,
    },
    {
        label: "Messages",
        route: "/inbox",
        icon: BiEnvelope,
        counter: 10,
    },
    {
        label: "Stats",
        route: "/stats",
        icon: BiBarChartAlt2,
    },
    {
        label: "Settings",
        route: "/settings",
        icon: BiSlider,
    },
];

export const Users: User[] = [
    // 0
    {
        id: "ukikalix",
        isVerified: false,
        name: "Ivan Uki Lara Kalix",
        posts: 70,
        postItems: [],
        followers: 911,
        followed: 2181,
        thumbnail:
            "https://www.datocms-assets.com/50719/1650648908-ukikalix.jpg?auto=format&w=300",
    },
    // 1
    {
        id: "soymemovillegas",
        isVerified: true,
        name: "Memo Villegas",
        posts: 731,
        postItems: [],
        followers: 163348,
        followed: 2305,
        thumbnail:
            "https://www.datocms-assets.com/50719/1650648291-soymemovillegas.jpg?auto=format&w=300",
    },
    // 2
    {
        id: "codemyjourney",
        isVerified: false,
        name: "STACY | Software Engineer",
        posts: 482,
        postItems: [],
        followers: 164773,
        followed: 330,
        thumbnail:
            "https://www.datocms-assets.com/50719/1650648509-codemyjourney.jpg?auto=format&w=300",
    },
    // 3
    {
        id: "ofmonstersandmen",
        isVerified: true,
        name: "Of Monsters and Men",
        posts: 1066,
        postItems: [],
        followers: 324551,
        followed: 5,
        thumbnail:
            "https://www.datocms-assets.com/50719/1650648621-ofmonstersandmen.jpg?auto=format&w=300",
    },
    // 4
    {
        id: "ninja",
        isVerified: true,
        name: "Tyler “Ninja” Blevins",
        posts: 1263,
        postItems: [],
        followers: 13129283,
        followed: 303,
        thumbnail:
            "https://www.datocms-assets.com/50719/1650648721-ninja.jpg?auto=format&w=300",
    },
    // 5
    {
        id: "uix.nerd",
        isVerified: false,
        name: "UIX Nerd",
        posts: 626,
        postItems: [],
        followers: 62789,
        followed: 1075,
        thumbnail:
            "https://www.datocms-assets.com/50719/1650648998-uixnerd.jpg?auto=format&w=300",
    },
    // 6
    {
        id: "alexamansour",
        isVerified: true,
        name: "Alexa Mansour",
        posts: 146,
        postItems: [],
        followers: 147889,
        followed: 810,
        thumbnail:
            "https://www.datocms-assets.com/50719/1650649071-alexamansour.jpg?auto=format&w=300",
    },
    // 7
    {
        id: "fortnite",
        isVerified: true,
        name: "Fortnite",
        posts: 1451,
        postItems: [],
        followers: 26098773,
        followed: 13,
        thumbnail:
            "https://www.datocms-assets.com/50719/1650649195-fortnite.jpg?auto=format&w=300",
    },
    // 8
    {
        id: "briloveschick",
        isVerified: false,
        name: "Fortnite",
        posts: 113,
        postItems: [],
        followers: 11893,
        followed: 68,
        thumbnail:
            "https://www.datocms-assets.com/50719/1650649279-briloveschick.jpg?auto=format&w=300",
    },
    // 9
    {
        id: "fcbarcelona",
        isVerified: true,
        name: "FC Barcelona",
        posts: 16374,
        postItems: [],
        followers: 107345632,
        followed: 91,
        thumbnail:
            "https://www.datocms-assets.com/50719/1650649380-fcbarcelona.jpg?auto=format&w=300",
    },
    // 10
    {
        id: "dualipa",
        isVerified: true,
        name: "Dua Lipa",
        posts: 1123,
        postItems: [],
        followers: 82423848338,
        followed: 894,
        thumbnail:
            "https://www.datocms-assets.com/50719/1650649689-dualipa.jpg?auto=format&w=300",
    },
    // 11
    {
        id: "cafelasflores",
        isVerified: false,
        name: "Café Las Flores",
        posts: 1756,
        postItems: [],
        followers: 25564,
        followed: 328,
        thumbnail:
            "https://www.datocms-assets.com/50719/1650650015-cafelasflores.jpg?auto=format&w=300",
    },
    // 12
    {
        id: "thedigitalocean",
        isVerified: false,
        name: "DigitalOcean",
        posts: 510,
        postItems: [],
        followers: 41267,
        followed: 288,
        thumbnail:
            "https://www.datocms-assets.com/50719/1650650130-thedigitalocean.jpg?auto=format&w=300",
    },
];

export const StorieItems: Story[] = [
    {
        id: useId.toString(),
        title: "The first post",
        description: "This is the first post",
        image: "https://www.datocms-assets.com/50719/1650687778-post1.jpg",
        likes: 230981,
        comments: 1656,
        user: Users[5],
        createdAt: new Date(),
    },
    {
        id: useId.toString(),
        title: "The first post",
        description: "This is the first post",
        image: "https://www.datocms-assets.com/50719/1650687783-post2.jpg",
        likes: 15689,
        comments: 273,
        user: Users[6],
        createdAt: new Date(),
    },
    {
        id: useId.toString(),
        title: "The first post",
        description: "This is the first post",
        image: "https://www.datocms-assets.com/50719/1650687787-post3.jpg",
        likes: 492783,
        comments: 1025,
        user: Users[9],
        createdAt: new Date(),
    },
    {
        id: useId.toString(),
        title: "The first post",
        description: "This is the first post",
        image: "https://www.datocms-assets.com/50719/1650687791-post4.jpg",
        likes: 2931,
        comments: 246,
        user: Users[2],
        createdAt: new Date(),
    },
    {
        id: useId.toString(),
        title: "The first post",
        description: "This is the first post",
        image: "https://www.datocms-assets.com/50719/1650687796-post5.jpg",
        likes: 879,
        comments: 13,
        user: Users[5],
        createdAt: new Date(),
    },
    {
        id: useId.toString(),
        title: "The first post",
        description: "This is the first post",
        image: "https://www.datocms-assets.com/50719/1650687800-post6.jpg",
        likes: 2123,
        comments: 34,
        user: Users[12],
        createdAt: new Date(),
    },
    {
        id: useId.toString(),
        title: "The first post",
        description: "This is the first post",
        image: "https://www.datocms-assets.com/50719/1650688308-post8.jpg",
        likes: 9683,
        comments: 106,
        user: Users[1],
        createdAt: new Date(),
    },
    {
        id: useId.toString(),
        title: "The first post",
        description: "This is the first post",
        image: "https://www.datocms-assets.com/50719/1650687805-post7.jpg",
        likes: 501,
        comments: 8,
        user: Users[12],
        createdAt: new Date(),
    },
    {
        id: useId.toString(),
        title: "The first post",
        description: "This is the first post",
        image: "https://www.datocms-assets.com/50719/1650691741-post9.jpg",
        likes: 23,
        comments: 1,
        user: Users[0],
        createdAt: new Date(),
    },
];
