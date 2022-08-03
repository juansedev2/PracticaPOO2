class Persona{

    // Atributos estáticos
    static contadorPersonas = 0;

    // Constructor de la clase
    constructor(nombre, apellido, edad) {
        this._idPersona = Persona.contador_personas++;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    // Get y set

    get id(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }

    // toString sobreescrito
    toString(){  // ! Templeate String es una forma de concatenación con comilla invertida y encapusular en ${}, en VS code posicionar el cursor sobre una variable y este dará la sugerencia de sobreescritura sintáctica
        return `Nombre: ${this._nombre} Apellido: ${this._apellido} Edad: ${this._edad}`;
    }

    
}

class Empleado extends Persona{

    // Atributo estático propio para asignar los ids a cada empleado y no depender de persona
    static contadorEmpleados = 0;

    // Constructor de la clase
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);  // Llamo al constructor de la clase padre, enviar los argumentos requeridos por los parámetos de este y así instanciar correctamente el objeto
        // (NOTA: Descarto esto porque a pesar de que puede ser una buena opción en mi opinión, no es lo que se solicita en los requerimientos)
        //this._id = Empleado.contador_empleados++;  // Como ya llamé a super, puede sobreescribir el valor del id heredado, así no tengo que volver a crear otra variable para un id de empleado
        Persona.contadorPersonas++;
        this._idEmpleado = ++Empleado.contadorEmpleados;  // Pre incremento antes de asignar y así empezar desde 1
        this._sueldo = sueldo;
    }

    // Get y set
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    // toString sobreescrito
    toString(){ // ! Templeate String
        return `${super.toString()} es un empleado con id ${this._idEmpleado} y con un sueldo de: ${this._sueldo}`;
    }
}
class Cliente extends Persona{
    // Atributo estático propio para asignar los ids a cada cliente y no depender de persona
    static contadorClientes = 0;

    // Constructor de la clase
    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad);  // Llamo al constructor de la clase padre, enviar los argumentos requeridos por los parámetos de este y así instanciar correctamente el objeto
        // (NOTA: Descarto esto porque a pesar de que puede ser una buena opción en mi opinión, no es lo que se solicita en los requerimientos)
        //this._id = Empleado.contador_empleados++;  // Como ya llamé a super, puede sobreescribir el valor del id heredado, así no tengo que volver a crear otra variable para un id de empleado
        Persona.contadorPersonas++;
        this._idCliente = ++Cliente.contadorClientes; // Pre incremento antes de asignar y así empezar desde 1
        let fecha = new Date();  // ! Por defecto, tan solo instanciarlo le da una fecha en formato completo (ver momento de registro del cliente o imprimir directamente), este objeto tiene muchos métodos, así que revisar documentación
        // console.log(fecha);
        this._fechaRegistro = fecha;
    }
 
    // Get y set
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    // toString sobreescrito
    toString(){
        return super.toString() + " es un cliente con id: " + this._idCliente + " que fue registrado en la fecha: " + this._fechaRegistro;
    }
}


// ! Main

// Registro de empleados
const empleado1 = new Empleado("Juan", "Arias", 22, 5000000);
const empleado2 = new Empleado("Hitohito", "Tadano", 20, 3500000);
const empleado3 = new Empleado("Yoshida", "NiMeAcuerdo", 30, 400000);
const empleado4 = new Empleado("Shinji ", "Ikari", 20, 200000);
const cliente1 = new Cliente("Marin ", "Kitagawa", 20);  // Yo no me acuerdo bien del orden de nombres y apellidos de los personajes :v
const cliente2 = new Cliente("Shoko", "Komi", 20);
const cliente3 = new Cliente("Hashimoto", "NiIdea", 30);

// Arreglo de empleados
let arregloEmpleados = [empleado1 , empleado2, empleado3, empleado4];
// Arreglo de clientes
let arregloClientes = [cliente1, cliente2, cliente3];

// Mostrar cuantas personas hay:
console.log("El sistema ha registrado un total de: " + Persona.contadorPersonas + " personas");  // Podemos usar empleado, porque heredó también el atributo de contador de Personas
// Mostrar cada empleado
console.log("Hay un total de: " + Empleado.contadorEmpleados + " empleados, los cuales son: ");
arregloEmpleados.forEach(function(empleado) {
    console.log(empleado.toString());
});
// Mostrar cada cliente
console.log("Hay un total de: " + Cliente.contadorClientes + " clientes, los cuales son: ");
arregloClientes.forEach(function(cliente) {
    console.log(cliente.toString());
});
