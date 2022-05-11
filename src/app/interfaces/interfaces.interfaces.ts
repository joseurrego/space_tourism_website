export interface Menu{
    numero:string,
    titulo:string,
    url: string
}

export interface Planeta {
    name: string,
    text: string,
    distance: string,
    time: string,
    img: string, 
}

export interface Crew {
    name: string,
    role: string,
    bio: string,
    img: string,
}


export interface Technology {
    name: string,
    description: string,
    img: string,
}