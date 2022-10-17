export default {
  "answers.no-size": (ref) =>
    `Lamentablemente no tenemos esta talla en la ref: ${ref}`,
  "answers.size": (ref: string, size: string[]) => {
    if (size.length === 1) {
      return `Si tenemos disponible la ref: ${ref} en talla ${size[0]}`;
    }

    return `En la ref: ${ref}, tenemos disponibes las tallas: ${size.join(
      ", "
    )}`;
  },
  "answers.url": (ref, url) =>
    `En el siguiente vinculo puedes tener toda la información y comprar la ref: ${ref} ${url}`,
  "answers.price": (ref, price) => `El valor de la ref: ${ref} es de ${price}`,
  "answers.all": (ref, size: string[], price, url) => {
    if (size.length) {
      return `En la ref: ${ref}, tenemos disponibles las tallas: ${size.join(
        ", "
      )},
      su valor es de ${price} y puedes adquirirla en ${url}`;
    }

    return `Si tenemos disponible la ref ${ref} en tall ${size[0]}, su valor es de ${price} y puedes adquirirla en ${url}`;
  },
};
