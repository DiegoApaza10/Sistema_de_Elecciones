# SISTEMA DE ELECCIONES

## Integrantes:

- Sergio Sebastian Santos Mena Quispe
- Diego Francisco Apaza Andaluz  (Creador de este fork)
- Jesus Bruno Chancayauri Soncco
- Christian Pardavé Espinoza
- Saul Arturo Condori Machaca
- 
Trabajo asignado:
Sistema de Autenticación y Seguridad

Este proyecto muestra un ejemplo básico de un sistema de autenticación y seguridad implementado en TypeScript utilizando el estilo de programación orientado a objetos (OOP). El sistema consta de tres partes principales:
entities (entidades):

En esta parte, se define la clase Usuario que representa a un usuario del sistema. Cada usuario tiene un nombre, un correo electrónico, un rol y un DNI (Documento Nacional de Identidad). La clase Usuario proporciona métodos para obtener y establecer estos atributos.

service (servicio):
Aquí, se encuentra la clase ServicioDeAutenticacion, que es responsable de gestionar la lista de usuarios y proporcionar métodos para agregar nuevos usuarios y validar su existencia. El servicio permite verificar si un DNI está duplicado, lo que indica que un usuario ya está registrado en el sistema.

vos (value objects):
En esta sección, se define la clase UserCrendenciales, que actúa como un "value object" (objeto de valor) para almacenar información adicional relacionada con el estado de un usuario, como si es un votante o un administrador. Esta clase está asociada con la clase Usuario y se utiliza para mantener datos específicos de un usuario.

Estilo de Programación:
El código utiliza el estilo de programación orientado a objetos (OOP), que se basa en la organización del código en objetos, que son instancias de clases que encapsulan datos y comportamientos relacionados.
