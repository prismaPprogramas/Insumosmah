import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";


/* =========================================
   CONTEXTO
========================================= */

const CarritoContext = createContext();


/* =========================================
   CONFIG
========================================= */

const STORAGE_CARRITO = "mah_carrito";


/* =========================================
   PROVIDER
========================================= */

export const CarritoProvider = ({ children }) => {

  /* =======================================
     CARRITO
  ======================================= */

  const [carrito, setCarrito] = useState(() => {

    try {

      const carritoGuardado =
        localStorage.getItem(STORAGE_CARRITO);


      if (carritoGuardado) {

        return JSON.parse(carritoGuardado);

      }


      return [];

    } catch (error) {

      console.error(
        "Error cargando carrito:",
        error
      );

      return [];

    }

  });


  /* =======================================
     OFFCANVAS CARRITO
  ======================================= */

  const [
    carritoAbierto,
    setCarritoAbierto
  ] = useState(false);


  /* =======================================
     PRODUCTO AGREGADO
     
     Sirve para mostrar ✓ unos segundos
  ======================================= */

  const [
    productoAgregado,
    setProductoAgregado
  ] = useState(null);


  /* =======================================
     GUARDAR LOCALSTORAGE
  ======================================= */

  useEffect(() => {

    try {

      localStorage.setItem(
        STORAGE_CARRITO,
        JSON.stringify(carrito)
      );

    } catch (error) {

      console.error(
        "Error guardando carrito:",
        error
      );

    }

  }, [carrito]);


  /* =======================================
     CANTIDAD TOTAL DE UNIDADES
  ======================================= */

  const cantidadCarrito = useMemo(() => {

    return carrito.reduce(
      (total, producto) => {

        return total + producto.cantidad;

      },
      0
    );

  }, [carrito]);


  /* =======================================
     TOTAL $
  ======================================= */

  const totalCarrito = useMemo(() => {

    return carrito.reduce(
      (total, producto) => {

        return (
          total +
          Number(producto.precio) *
          producto.cantidad
        );

      },
      0
    );

  }, [carrito]);


  /* =======================================
     CANTIDAD DE PRODUCTOS DIFERENTES
  ======================================= */

  const cantidadProductosDiferentes =
    carrito.length;


  /* =======================================
     ABRIR CARRITO
  ======================================= */

  const abrirCarrito = () => {

    setCarritoAbierto(true);

  };


  /* =======================================
     CERRAR CARRITO
  ======================================= */

  const cerrarCarrito = () => {

    setCarritoAbierto(false);

  };


  /* =======================================
     TOGGLE CARRITO
  ======================================= */

  const toggleCarrito = () => {

    setCarritoAbierto(
      (estadoActual) => !estadoActual
    );

  };


  /* =======================================
     AGREGAR PRODUCTO
  ======================================= */

  const agregarAlCarrito = (producto) => {

    /* ---------------------------------------
       NO AGREGAR SIN STOCK
    --------------------------------------- */

    if (producto.stock === false) {

      return;

    }


    setCarrito((carritoActual) => {

      const productoExistente =
        carritoActual.find(
          (item) =>
            item.id === producto.id
        );


      /* -------------------------------------
         YA EXISTE
      ------------------------------------- */

      if (productoExistente) {

        return carritoActual.map(
          (item) => {

            if (item.id === producto.id) {

              return {
                ...item,

                cantidad:
                  item.cantidad + 1,
              };

            }


            return item;

          }
        );

      }


      /* -------------------------------------
         PRODUCTO NUEVO
      ------------------------------------- */

      return [
        ...carritoActual,

        {
          ...producto,

          cantidad: 1,
        },
      ];

    });


    /* ---------------------------------------
       CHECK ✓
    --------------------------------------- */

    setProductoAgregado(producto.id);


    setTimeout(() => {

      setProductoAgregado(null);

    }, 900);


    /* ---------------------------------------
       ABRIR OFFCANVAS
    --------------------------------------- */

    setCarritoAbierto(true);

  };


  /* =======================================
     SUMAR UNIDAD
  ======================================= */

  const sumarUnidad = (id) => {

    setCarrito((carritoActual) => {

      return carritoActual.map(
        (producto) => {

          if (producto.id === id) {

            return {
              ...producto,

              cantidad:
                producto.cantidad + 1,
            };

          }


          return producto;

        }
      );

    });

  };


  /* =======================================
     RESTAR UNIDAD
  ======================================= */

  const restarUnidad = (id) => {

    setCarrito((carritoActual) => {

      return carritoActual
        .map((producto) => {

          if (producto.id === id) {

            return {
              ...producto,

              cantidad:
                producto.cantidad - 1,
            };

          }


          return producto;

        })
        .filter(
          (producto) =>
            producto.cantidad > 0
        );

    });

  };


  /* =======================================
     ELIMINAR PRODUCTO
  ======================================= */

  const eliminarDelCarrito = (id) => {

    setCarrito((carritoActual) => {

      return carritoActual.filter(
        (producto) =>
          producto.id !== id
      );

    });

  };


  /* =======================================
     VACIAR CARRITO
  ======================================= */

  const vaciarCarrito = () => {

    setCarrito([]);

  };


  /* =======================================
     BUSCAR CANTIDAD DE UN PRODUCTO
  ======================================= */

  const cantidadDeProducto = (id) => {

    const producto =
      carrito.find(
        (item) =>
          item.id === id
      );


    return producto
      ? producto.cantidad
      : 0;

  };


  /* =======================================
     SABER SI ESTÁ EN CARRITO
  ======================================= */

  const estaEnCarrito = (id) => {

    return carrito.some(
      (producto) =>
        producto.id === id
    );

  };


  /* =======================================
     VALUE
  ======================================= */

  const value = {

    /* DATOS */

    carrito,

    cantidadCarrito,

    cantidadProductosDiferentes,

    totalCarrito,

    productoAgregado,


    /* OFFCANVAS */

    carritoAbierto,

    setCarritoAbierto,

    abrirCarrito,

    cerrarCarrito,

    toggleCarrito,


    /* FUNCIONES */

    agregarAlCarrito,

    sumarUnidad,

    restarUnidad,

    eliminarDelCarrito,

    vaciarCarrito,

    cantidadDeProducto,

    estaEnCarrito,

  };


  /* =======================================
     RETURN
  ======================================= */

  return (

    <CarritoContext.Provider
      value={value}
    >

      {children}

    </CarritoContext.Provider>

  );

};


/* =========================================
   HOOK
========================================= */

export const useCarrito = () => {

  const context =
    useContext(CarritoContext);


  if (!context) {

    throw new Error(
      "useCarrito debe usarse dentro de CarritoProvider"
    );

  }


  return context;

};


export default CarritoContext;