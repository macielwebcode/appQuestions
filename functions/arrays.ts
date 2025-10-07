export function embaralhar(elementos: any[]): any{
    return elementos
        .map(item =>({item, aleatorio: Math.random()}))
        .sort((obj1, obj2) => obj1.aleatorio - obj2.aleatorio) //orde descrescente
        .map(obj => obj.item)
}