class Author {
    Constructor(name, username, email, phone, street, city, zipcode, company) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
        this.company = company.name;
    }
}

export { Author }