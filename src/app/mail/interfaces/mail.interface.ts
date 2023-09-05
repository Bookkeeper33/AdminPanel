export interface Mail {
    id: number;
    category: string;
    label: { labelName: string; color: string };
    author: string;
    img: string;
    contactInfo: {
        phone: string;
        email: string;
        title: string;
        address: string;
    };
    subject: string;
    body: string;
    date: Date;
    isChecked: boolean;
}
