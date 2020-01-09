import Genre from "../../interface/Genre";
import Company from "../../interface/Company";

export const getGenres = (arr: Array<Genre>) => {
    const genres: Array<string> = [];
    arr.slice(0, 3).forEach((x: Genre) => {
        genres.push(x.name);
    });
    return genres.join(", ");
};

export const getRuntime = (duration: number): string =>
    `${Math.floor(duration / 60)}h ${duration % 60}m`;

export const getYear = (date: string) => new Date(date).getFullYear();

export const getProductionCompanies = (companies: Array<Company>) => {
    const list: Array<string> = [];
    companies.forEach(company => list.push(company.name));
    return list.join(", ");
};