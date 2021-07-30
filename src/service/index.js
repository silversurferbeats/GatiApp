

export  const GetGati = async () => {
    const data = await fetch('https://cataas.com/cat?json=true');
    const value = await data.json();
    return console.log(value);
}

export default GetGati();

