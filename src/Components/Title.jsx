import React from 'react'

const Title = () => {
  return (
    <div className='titulo'> 
      <h1 className='titulo-app'>Dogs-App</h1>
      <h2 className='sub-titulo'> Aplicación que consume imagenes de perritos desde una API  </h2>
      <p className='texto-explicacion'>La primera vez que cargue la App traera un perro aleatorio, luego podras buscar por raza y te devolverá su imagen, en caso de no encontrar imagen devolverá una random. Elegida una raza si das click sobre la imagen te mostrará otra foto que se corresponderá a la raza elegida!</p>
    </div>
  )
}

export default Title