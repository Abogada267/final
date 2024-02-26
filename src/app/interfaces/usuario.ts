export interface Usuario {
    id?:string,
    email: string | null,
    password: string | null,
    nombre?: string,
    direccion?: string,
    telefono?: string,
    foto?: string,
    isAdmin:boolean
}