import { IListItem } from "./ListItem";

export interface ICharacter extends IListItem {
    id: number;
    name: string;
}