namespace Dominio.AutenticacionYseguridad.vos {
  import Usuario = Dominio.AutenticacionYseguridad.entities.Usuario;

  class UserCrendenciales {
    public estado_votante: boolean;
    public estado_admin: boolean;
    public usuario: Usuario;

    /**
     * Constructor
     * @param usuario El usuario al que se asignarán estas credenciales.
     * @param estado_votante Estado del usuario como votante (true si es votante, false si no lo es). Por defecto es true.
     * @param estado_admin Estado del usuario como administrador (true si es administrador, false si no lo es). Por defecto es false.
     */
    constructor(usuario: Usuario, estado_votante: boolean = true, estado_admin: boolean = false) {
      this.usuario = usuario;
      this.estado_votante = estado_votante;
      this.estado_admin = estado_admin;
    }

    /**
     * Establecer el estado de votante del usuario.
     * @param esVotante True si el usuario es votante, false si no lo es.
     */
    setEstadoVotante(esVotante: boolean) {
      this.estado_votante = esVotante;
    }

    /**
     * Obtener el estado de votante del usuario.
     * @returns True si el usuario es votante, false si no lo es.
     */
    getEstadoVotante(): boolean {
      return this.estado_votante;
    }

    /**
     * Establecer el estado de administrador del usuario.
     * @param esAdmin True si el usuario es administrador, false si no lo es.
     */
    setEstadoAdmin(esAdmin: boolean) {
      this.estado_admin = esAdmin;
    }

    /**
     * Obtener el estado de administrador del usuario.
     * @returns True si el usuario es administrador, false si no lo es.
     */
    getEstadoAdmin(): boolean {
      return this.estado_admin;
    }

    /**
     * Obtener el usuario asociado a estas credenciales.
     * @returns El usuario asociado a estas credenciales.
     */
    getUsuario(): Usuario {
      return this.usuario;
    }
  }
}
