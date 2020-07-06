import { ID } from '@datorama/akita';

export class Gig {
    id: ID;
    name: string;
    description: string;
    deadline: string;
    pay: string;
    files: FileList | null;
}
export class GigData {
    id: ID;
    name: string;
    description: string;
    deadline: string;
    pay: string;
    files: FileList | null;
}
