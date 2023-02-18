import axios, { AxiosResponse } from "axios";

const apiAnts = axios.create({
    baseURL: 'https://sg-ants-test.herokuapp.com/',
});

export interface AntsProps {
    name: string;
    length: number;
    color: "RED" | "BLACK" | "SILVER";
    weight: number;
    winChance?: number;
}

export interface GetAntsProps {
    ants: AntsProps[];
}

export const getAnts = (): Promise<AxiosResponse<GetAntsProps,any>> => {
    const url = `ants`;

    return apiAnts.get(url);
};