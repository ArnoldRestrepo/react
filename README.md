# React Course

**React** cumple su función como biblioteca ya que para utilizar su código se debe importar. También es un Framework aunque las convenciones de cómo debe ser organizado todo no son estrictas.
En este curso aprenderás las prácticas que la comunidad ha decidido que son buenas.

**React** es declarativo, lo que quiere decir que se le indica qué debe hacer pero no cómo debe hacerse, ahorrando de esta manera muchos pasos.

**JSX** es HTML dentro de Javascript, esto se verá más adelante en detalle.

**React** está estructurado por **componentes** que son como pequeños bloques de lego que al ser unidos forman aplicaciones de React. Estos componentes pueden tener estilos, ser enlazados a eventos y sus estados pueden ser modificados.

Con **React** también se tiene la ventaja de que será escrito una sola vez y podrá ser utilizado en aplicaciones web, móviles, entre otras.

## Buenas Prácticas

- Es una buena práctica que los componentes vivan en su propio archivo y para ello se les crea una carpeta.
- Todos los componentes requieren por lo menos el método render que define cuál será el resultado que aparecerá en pantalla.
- El source de las imágenes en React puede contener direcciones en la web o se le puede hacer una referencia directa importándola. Si se importa deben usarse llaves para que sea evaluado.

## PROPS

Los props que es la forma corta de properties son argumentos de una función y en este caso serán los atributos de nuestro componente como class, src, etc.
Estos props salen de una variable de la clase que se llama this.props y los valores son asignados directamente en el `ReactDOM.render()`

Las páginas en React son componentes conseguir distinguirlas nos servirá para saber que es un componente que adentro lleva otros componentes.

Al escribir los props no importa el orden en el que lo hagas, únicamente importa el nombre.

## Eventos

React dispone de eventos. Cada vez que se recibe información en un input se obtiene un evento onChange y se maneja con un método de la clase this.handleChange
Los elementos button también tienen un evento que es onClick.
Cuando hay un botón dentro de un formulario, este automáticamente será de tipo submit. Si no queremos que pase así hay dos maneras de evitarlo: especificando que su valor es de tipo button o manejándolo desde el formulario cuando ocurre el evento onSubmit.

## Manejo de Estado

Hasta esta clase todos los componentes han obtenido su información a través de props que vienen desde afuera (otros componentes) pero hay otra manera en la que los componentes pueden producir su propia información y guardarla para ser consumida o pasada a otros componentes a través de sus props. La clave está en que la información del state a otros componentes pasará en una sola dirección y podrá ser consumida pero no modificada.

- Para guardar la información en el estado se usa una función de la clase component llamada setState a la cual se le debe pasar un objeto con la información que se quiere guardar.
- Aunque no se ve, la información está siendo guardada en dos sitios. Cada input guarda su propio valor y al tiempo la está guardando en setState, lo cual no es ideal. Para solucionarlo hay que modificar los inputs de un estado de no controlados a controlados.

## Levantamiento de Estado

Levantar el estado es una técnica de React que pone el estado en una localización donde se le pueda pasar como props a los componentes. Lo ideal es poner el estado en el lugar más cercano a todos los componentes que quieren compartir esa información.

Algo interesante que le da el nombre a React es su parte de “reactivo” ya que cada vez que hay un cambio en el estado o en los props que recibe un componente se vuelve a renderizar todo el componente y todos sus descendientes.

## Introducción React Router

Las aplicaciones que se trabajan en React son llamadas single page apps. Esto es posible gracias a React Router que es una librería Open Source.

**Multi Page Apps:** Cada página implica una petición al servidor. La respuesta usualmente tiene todo el contenido de la página.

**Single Page Apps (SPA):** Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían.

**React Router (v4):** Nos da las herramientas para poder hacer SPA fácilmente. Usaremos 4 componentes:

- BrowserRouter: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.
- Route: Cuando hay un match con el +path+, se hace render del +component+. El component va a recibir tres props: match, history, location.
- Switch: Dentro de Switch solamente van elementos de Route. Switch se asegura que solamente un Route se renderize.
- Link: Toma el lugar del elemento <a>, evita que se recargue la página completamente y actualiza la URL.

## Mejorando la User Interface con un Layout

- React.Fragment es la herramienta que te ayudará a renderizar varios componentes y/o elementos sin necesidad de colocar un div o cualquier otro elemento de HTML para renderizar sus hijos. Al usar esta característica de React podremos renderizar un código más limpio y legible, ya que ``React.Fragment` no se renderiza en el navegador.

- El 404 es la ruta que se renderizará cuando ninguna otra coincida con la dirección ingresada.

Otra forma de hacer que todas tus URL’s que no existan sean redirigidas a tu componente de 404 sería de la siguiente forma:

`import { Redirect, Route } from "react-router-dom";`

Como podemos observar llamamos a nuestro componente 404 y luego utilizamos Redirect, el cual es un componente de React Router para hacer redirecciones; en este caso hacemos que todas las URL’s que no correspondan a alguna que hayamos declarado, sean redirigidas a MiComponente404.

## Ciclo de Vida de los Componentes

Cuando React renderiza los componentes decimos que entran en escena, cuando su estado cambia o recibe unos props diferentes se actualizan y cuando cambiamos de página se dice que se desmontan.

### Montaje:

Representa el momento donde se inserta el código del componente en el DOM.
Se llaman tres métodos: constructor, render, componentDidMount.

### Actualización:

Ocurre cuando los props o el estado del componente cambian.
Se llaman dos métodos: render, componentDidUpdate.

### Desmontaje:

Nos da la oportunidad de hacer limpieza de nuestro componente.
Se llama un método: componentWillUnmount. Es importante que si se esta haciendo una petición asíncrona se cancele ese llamado en caso de que se desmonte el componente.

Ejemplo

```javascript
componentDidMount(){
  this.mounted = true;

  this.props.fetchData().then((response) => {
    if(this.mounted) {
      this.setState({ data: response })
    }
  })
}

componentWillUnmount(){
  this.mounted = false;
}
```
