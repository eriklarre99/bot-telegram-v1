const commands = [
    
    // api example
    async function Poke(URL) {
        const res = await fetch(URL);
        const getData = await res.json();
        return await  getData
    }
    

    const Greet = (name) => {
        let Welcome = `Hi, how you are ${name} ? `
        return  Welcome
    }



];

commands.getApi('erik')