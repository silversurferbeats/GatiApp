

export const GetGati = async () => {
    const data = await fetch('https://cataas.com/cat?json=true');
    const value = await data.json();
    return `https://cataas.com${value.url}`;
};


export const GetGatiGiff = async () => {
    const data = await fetch('https://cataas.com/cat/gif?json=true');
    const value = await data.json();
    return `https://cataas.com${value.url}`;
};

