export interface Mail {
    id: number;
    category: string;
    label: { labelName: string; color: string };
    author: string;
    img: string;
    subject: string;
    body: string;
    date: Date;
}
