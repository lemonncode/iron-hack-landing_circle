# Layout Builder

Layout Builder es una herramienta flexible y modular para construir maquetaciones web personalizadas utilizando HTML, CSS (Sass) y JavaScript (vanilla). Está diseñada para facilitar la creación de interfaces web sin depender de frameworks complejos.

## Requisitos
Antes de comenzar, asegúrate de tener los siguientes requisitos:

- **Node.js** (para compilar Sass)
- **Sass** (para gestionar los estilos en Sass)

Si no tienes estos instalados, sigue los pasos a continuación para configurar tu entorno.

## Cómo Usarlo

### 1. Clonar el Repositorio
Si aún no has clonado el repositorio en tu máquina local, ejecuta el siguiente comando:

```bash
git clone <URL_DEL_REPOSITORIO>
```

### 2. Instalación de Dependencias
Node.js y Sass son necesarios para trabajar con este proyecto.

- **Instalar Node.js**: Descárgalo desde [nodejs.org](https://nodejs.org/).
- **Instalar Sass**: Ejecuta el siguiente comando para instalar Sass globalmente:

```bash
npm install -g sass
```

### 3. Compilar Archivos Sass
Una vez que hayas instalado Sass, puedes compilar los archivos `.scss` a `.css` usando el siguiente comando:

```bash
sass assets/css/main.scss assets/css/styles.css
```

Este comando convertirá tus estilos Sass en un archivo CSS listo para ser usado en tu proyecto.

### 4. Abrir el Archivo `index.html`
Una vez que hayas compilado los archivos Sass, abre el archivo `index.html` en tu navegador para ver el Layout Builder en acción.

## Funcionalidades
El Layout Builder ofrece las siguientes características:

- **Configuración de Layout**: Puedes agregar, eliminar y reorganizar bloques del layout de manera sencilla. Esta funcionalidad te permite personalizar tu página de forma flexible.
- **Personalización de Tema**: Personaliza colores, bordes y fuentes a través del archivo `theme-config.js`. Modifica este archivo según tus necesidades para ajustar el diseño visual de la página.

## Contribuciones
Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Haz un **fork** del repositorio.
2. Crea una **rama** con el nombre de tu nueva funcionalidad o corrección de error.
3. Realiza tus cambios y envía un **pull request** con una descripción detallada de las modificaciones.

¡Gracias por contribuir a Layout Builder!

# layout_builder
