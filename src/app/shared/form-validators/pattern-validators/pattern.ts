//Coleccion de expresiones regulares para validar campos
export const PATTERNS = {
  DOC_NUM: {
    regex: /^[0-9]{8,}$/,
    message: 'El campo debe ser numerico y tener al menos 8 dígitos'
  },
  PHONE: {
    regex: /^[0-9]{10,}$/,
    message: 'El campo debe tener al menos 10 dígitos'
  },
  EMAIL: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'El correo electrónico no es válido'
  },
  PASSWORD: {
    regex: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
    message: 'El campo debe tener al menos una mayúscula, un número y 8 caracteres'
  }
};