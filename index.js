class ImmutableEmployee {
    #name;
    #id;
    #dateOfJoining;
    #addresses;
  
    constructor(name, id, dateOfJoining, addresses) {
      this.#name = name;
      this.#id = id;
      this.#dateOfJoining = new Date(dateOfJoining.getTime());
      this.#addresses = addresses.map(
        (address) => new Address(address.street, address.city)
      );
  
      Object.freeze(this.#addresses);
      Object.freeze(this);
    }
  
    getName() {
      return this.#name;
    }
  
    getId() {
      return this.#id;
    }
  
    getDateOfJoining() {
      return new Date(this.#dateOfJoining.getTime());
    }
  
    getAddresses() {
      return this.#addresses.map(
        (address) => new Address(address.getStreet(), address.getCity())
      );
    }
  }
  
  class Address {
    #street;
    #city;
  
    constructor(street, city) {
      this.#street = street;
      this.#city = city;
  
      Object.freeze(this);
    }
  
    getStreet() {
      return this.#street;
    }
  
    getCity() {
      return this.#city;
    }
  }
  
  const address1 = new Address("123 Main St", "New York");
  const address2 = new Address("456 Elm St", "San Francisco");
  
  const employee = new ImmutableEmployee(
    "John Doe",
    "E12345",
    new Date(),
    [address1, address2]
  );
  
  console.log(employee.getName());
  console.log(employee.getId()); 
  console.log(employee.getDateOfJoining());
  console.log(employee.getAddresses()); 
  
  