//copia prop de p em o e retorna o.
// se o e p tem prop de mesmo nome p sobrescreve
export function extend(o, p) {
	for (let prop in p) o[prop] = p[prop];
	return o;
}

// retorna um novo objeto, copia prop de p em o e retorna o.
// se o e p tem prop de mesmo nome p sobrescreve	
export function union(o, p) {
	return extend(extend({}, o), p);
}