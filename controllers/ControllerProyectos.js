import { proyectos } from "../models/ModelProyectos.js";

export function listarProyectos() {
    for (let index = 0; index < proyectos.length; index++) {
        console.log(proyectos[index]);
        let proyecto = document.createElement('div');
        let nombreProyecto = document.createElement("h2");
        let imgProyecto = document.createElement("img");
        let duracionProyecto = document.createElement("p");
        let tiempoProyecto = document.createElement("p");
        let empresaProyecto = document.createElement("p");
        let dificultadProyecto = document.createElement("p");
        nombreProyecto.textContent = proyectos[index].nombre
        imgProyecto.src = proyectos[index].imagen
        duracionProyecto.textContent = proyectos[index].duracion
        empresaProyecto.textContent = proyectos[index].empresa
        dificultadProyecto.textContent = proyectos[index].dificultad
        proyecto.append(imgProyecto, nombreProyecto, duracionProyecto, tiempoProyecto, empresaProyecto, dificultadProyecto)
        document.getElementById('contenido').append(proyecto)
        console.log(proyecto);
    }
}

export function filtrarPorEmpresa() {

}

export function filtrarPorProyecto() {

}

export function filtrarPorTipoProyecto() {

}