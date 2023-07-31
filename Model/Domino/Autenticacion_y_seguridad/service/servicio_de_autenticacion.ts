namespace Dominio.AutenticacionYseguridad.service {
  import Usuario = Dominio.AutenticacionYseguridad.entities.Usuario;

  class ServicioDeAutenticacion {
    private usuarios: Usuario[];

    /**
     * Constructor por defecto
     */
    constructor() {
      // Inicializar un arreglo vacío para almacenar los usuarios
      this.usuarios = [];
    }

    /**
     * Método para agregar un nuevo usuario al servicio de autenticación.
     * Puedes usar este método para poblar la lista de usuarios en el servicio.
     * @param usuario El usuario que se va a agregar.
     */
    public agregarUsuario(usuario: Usuario) {
      this.usuarios.push(usuario);
    }

    /**
     * Implementar este método para validar un usuario.
     * @param email El correo electrónico del usuario a validar.
     * @param dni El DNI del usuario a validar.
     * @returns True si el usuario es válido, false en caso contrario.
     */
    public validarUsuario(dni: string): boolean {
      // Verificar que el DNI proporcionado sea único, es decir, no esté asignado a otro usuario
      const duplicadoDNI = this.usuarios.some((usuario) => usuario.getDNI() === dni);

      // Si el DNI está duplicado, retornar false (usuario no válido)
      if (duplicadoDNI) {
        return false;
      }
      // Si se encuentra un usuario con el correo electrónico proporcionado y el DNI no está duplicado, retornar true (usuario válido)
      return true;
    }
  }
}