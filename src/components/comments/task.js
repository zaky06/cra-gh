class Transport {
  constructor(type, price, vendor, model) {
    this.type = type;
    this.price = price;
    this.vendor = vendor;
    this.model = model;
  }

  getInfo() {
    return `${this.vendor}, ${this.model}`;
  }

  getPrice() {
    return this.price.toLocaleString("ru-RU") + " ₽";
  }
}

const anyTransport = new Transport("car", "333", "BMW", "X^");

class Car extends Transport {
  constructor(vendor, model, doorsCount, price) {
    super("car", price, vendor, model);
    this.doorsCount = doorsCount;
    this.getInfo = super.getInfo.bind(this);
    this.getPrice = super.getPrice.bind(this);
    this.getDoorsCount = this.getDoorsCount.bind(this);
  }

  getDoorsCount() {
    return `Кол-во дверей: ${this.doorsCount}`;
  }
}

class Bike extends Transport {
  constructor(vendor, model, maxSpeed, price) {
    super("bike", price, vendor, model);
    this.maxSpeed = maxSpeed;
    this.getInfo = super.getInfo.bind(this);
    this.getPrice = super.getPrice.bind(this);
    this.getMaxSpeed = this.getMaxSpeed.bind(this);
  }

  getMaxSpeed() {
    return `Макс. скорость: ${this.maxSpeed} км/ч`;
  }

  getInfo() {
    super.getInfo.apply(this, this.vendor, this.model);
  }
}

const data = [
  {
    vendor: "VW",
    model: "Passat",
    doorsCount: "4",
    price: "200000",
    type: "car",
  },
  { vendor: "BMX", model: "233", maxSpeed: "6", price: "5000", type: "bike" },
];

for (const item of data) {
  if (item.type === "car") {
    const { getDoorsCount, getInfo, getPrice } = new Car(
      item.vendor,
      item.model,
      item.doorsCount,
      item.price
    );
    console.log(getInfo(), getDoorsCount(), getPrice());
  } else {
    const { getMaxSpeed, getInfo, getPrice } = new Bike(
      item.vendor,
      item.model,
      item.maxSpeed,
      item.price
    );
    console.log(getInfo(), getMaxSpeed(), getPrice());
  }
}

/*
    Вы устроились разработчиком в автомобильную компанию. Первое задание — починить код,
    который отвечает за отображение информации о транспорте и цене. Поправьте классы так,
    чтобы ошибка TypeError: Cannot read property 'vendor' of undefined больше не отображалась.
     Вносите изменения только в файл task.js.
  */
