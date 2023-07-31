
namespace Dominio.AutenticacionYseguridad.entities {
  export class Usuario {
    protected nombre: string;
    protected email: string;
    protected rol: string;
    protected dni: string;

    /**
     * Default constructor
     */
    protected constructor(nombre: string, email: string, rol: string, dni: string) {
      this.nombre = nombre;
      this.email = email;
      this.rol = rol;
      this.dni = dni;
    }

    // Setter methods
    setNombre(nombre: string) {
      this.nombre = nombre;
    }

    setEmail(email: string) {
      this.email = email;
    }

    setRol(rol: string) {
      this.rol = rol;
    }

    setDNI(dni: string) {
      this.dni = dni;
    }

    // Getter methods
    getNombre(): string {
      return this.nombre;
    }

    getEmail(): string {
      return this.email;
    }

    getRol(): string {
      return this.rol;
    }

    getDNI(): string {
      return this.dni;
    }
  }
}

const Usuario = Dominio.AutenticacionYseguridad.entities.Usuario;

// Ejemplo de uso:
const usuario1 = new Usuario("John Doe", "john@example.com", "Admin", "12345678A");

console.log(usuario1.getNombre()); // Salida: "John Doe"
console.log(usuario1.getEmail()); // Salida: "john@example.com"
console.log(usuario1.getRol()); // Salida: "Admin"
console.log(usuario1.getDNI()); // Salida: "12345678A"

usuario1.setNombre("Jane Doe");
console.log(usuario1.getNombre()); // Salida: "Jane Doe"
