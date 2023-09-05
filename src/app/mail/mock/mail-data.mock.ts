import { Mail } from "../interfaces/mail.interface";

export const mailsMock: Mail[] = [
    {
        id: 1,
        category: "Inbox",
        label: {
            labelName: "family",
            color: "#90b900",
        },
        author: "John Doe",
        contactInfo: {
            phone: "777-77-8989",
            email: "jakobi@gmail.com",
            title: "Senior Dev",
            address: "Metro Darnitsa, Kyiv",
        },
        img: "../../assets/gosling.jpg",
        subject: "Hello",
        body: "This is a test message.",
        date: new Date(),
        isChecked: false,
    },
    {
        id: 2,
        category: "Draft",
        label: {
            labelName: "friend",
            color: "#209e91",
        },
        author: "Jane Doe",
        contactInfo: {
            phone: "14-88-3232",
            email: "murchik@gmail.com",
            title: "Product Manager",
            address: "Zdolbunivksa 12, Kyiv",
        },
        img: "../../assets/gosling.jpg",
        subject: "New coffee machine",
        body: "How are you?",
        date: new Date(),
        isChecked: false,
    },
    {
        id: 3,
        category: "Spam",
        label: {
            labelName: "work",
            color: "#e85656",
        },
        author: "Bob Smith",
        contactInfo: {
            phone: "585-77-1488",
            email: "smitNotbob@gmail.com",
            title: "Customer Support Operator",
            address: "Kreshchatyk st., Kyiv",
        },
        img: "../../assets/gosling.jpg",
        subject: "Important announcement",
        body: "Please read this important announcement.",
        date: new Date(),
        isChecked: false,
    },
    {
        id: 4,
        category: "Sent mail",
        label: {
            labelName: "study",
            color: "#dfb81c",
        },
        author: "Nikita Gedenidze",
        contactInfo: {
            phone: "228-42-322",
            email: "jakobi@gmail.com",
            title: "Coca-Cola Seller",
            address: "Junist st, Kyiv",
        },
        img: "../../assets/gosling.jpg",
        subject: "Wanna study JS???",
        body: "Please read this annotation and follow the course instruction.",
        date: new Date(),
        isChecked: false,
    },
];

export const categoriesMock = [
    "Inbox",
    "Sent mail",
    "Important",
    "Draft",
    "Spam",
    "Trash",
];
