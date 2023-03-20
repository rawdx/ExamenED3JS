function menu() {
	var listaAlumnos = [];

	let opcion;
	do {
		opcion = prompt("[Prestamos]\n1. Matrícula de alumno\n2. Borrar alumno\n3. Listar alumnos\n0. Salir");

		while (opcion != "0" && opcion != "1" && opcion != "2" && opcion != "3") {
			alert("[Error] Introduzca una opción válida: ");
			opcion = prompt("[Prestamos]\n1. Matrícula de alumno\n2. Borrar alumno\n3. Listar alumnos\n0. Salir");
		}

		switch (opcion) {
			case "1":
				Alumno.addAlumno(listaAlumnos);
				break;
			case "2":
				Alumno.removeAlumno(listaAlumnos);
				break;
			case "3":
				Alumno.listAlumnos(listaAlumnos);
				break;
		}
	} while (opcion != "0");
}

class Alumno {
	constructor(nombre, apelllidos, telefono, idPortatil) {
		this.id = null;
		this.nombre = nombre;
		this.apellidos = apelllidos;
		this.telefono = telefono;
		this.idPortatil = idPortatil;
	}

	static addAlumno(listaAlumnos) {
		let nombre = prompt("Introduzca el nombre: ");
		let apellidos = prompt("Introduzca los apellidos: ");
		let telefono = prompt("Introduzca el teléfono: ");
		let marca = prompt("Introduzca la marca del portátil: ");
		let modelo = prompt("Introduzca el modelo del portátil: ");

		var portatil = new Portatil(marca, modelo);
		var alumno = new Alumno(nombre, apellidos, telefono, portatil.id);

		alumno.id = listaAlumnos.length + 1;

		listaAlumnos.push(alumno);
	}

	static removeAlumno(listaAlumnos) {
		let idBorrar = prompt("Introduzca el id del alumno para borrar su información: ");

		if (idBorrar > listaAlumnos.length || idBorrar < 1 || listaAlumnos.length == 0)
			alert("[Error] No se ha podido borrar la información.");
		else {
			listaAlumnos.splice(idBorrar - 1, 1);
			alert("La información se ha borrado exitosamente.");
		}
	}

	static listAlumnos(listaAlumnos) {
		if (listaAlumnos.length != 0)
			for (var i = 0; i < listaAlumnos.length; i++)
				alert(JSON.stringify(listaAlumnos[i]));
		else
			alert("[Error] No existe información para listar.");
	}
}

class Portatil {
	constructor(marca, modelo) {
		this.marca = marca;
		this.modelo = modelo;

		let id;
		if (marca.length < 3)
			id = marca;
		else
			id = marca.substring(0, 3);

		id += "-";

		if (modelo.length < 3)
			id += modelo;
		else
			id += modelo.substring(0, 3);

		this.id = id;
	}
}