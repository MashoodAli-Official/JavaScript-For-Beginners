// Media 👇👇 Library using Classes (Inheritnace and Encapuslation) in javascript.

// Media is a Parent class and Book, Movie and Music are child classes
class Media{
    constructor(title, relaseDate, genre){
        this._title = title; //Private properties using underscore prefix (_)
        this._relaseDate = relaseDate;
        this._genre = genre;
    };
    // Here we are using Encapsulation by using getters instead of direct property access
    get title(){
        console.log(`Title: ${this._title}`);
        return this._title; // here we are returning the private property otherwise child class will return undefined
    };
    get releaseDate(){
        console.log(`Relase Date: ${this._releaseDate}`);
        return this._releaseDate;
    };
    get genre(){
        console.log(`Genre: ${this._genre}`);
        return this._genre;
    };
};

// Book is a child class of Media
class Book extends Media{
    constructor(title, relaseDate, genre, author, pages){
        super(title, relaseDate, genre);
        this._author = author;
        this._pages = pages;
    };
    get author(){
        console.log(`Author: ${this._author}`);
        return this._author;
    };
    get pages(){
        console.log(`Pages: ${this._pages}`);
        return this._pages;
    };
};

// Book is a child class of Movie
class Movie extends Media{
    constructor(title, relaseDate, genre, director, movieDuration){
        super(title, relaseDate, genre);
        this._director = director;
        this._movieDuration = movieDuration;
    }
    get director(){
        console.log(`Director: ${this._director}`);
        return this._director;
    };
    get duration(){
        console.log(`Movie Duration: ${this._movieDuration}`);
        return this._movieDuration;
    };
};

// Book is a child class of Music
class Music extends Media{
    constructor(title, relaseDate, genre, singer, songDuration){
        super(title, relaseDate, genre);
        this._singer = singer;
        this._songDuration = songDuration;
    };
    get singer(){
        console.log(`Singer: ${this._singer}`);
        return this._singer;
    };
    get songDuration(){
        console.log(`Song Duration: ${this._songDuration}`);
        return this._songDuration;
    };
};

// Testing Media Parent Class
console.log('\n👇👇👇 Testing Media Class');
const media = new Media('Media', 2023, 'General');
media.title
media.releaseDate;
media.genre;

// Testing Book class
console.log('\n👇👇👇 Testing Book Class');
const harryPotter = new Book('Harry Potter', 2000, 'Fantasy', 'J.K. Rowling', 400);
harryPotter.title;
harryPotter.releaseDate; 
harryPotter.genre;
harryPotter.author;
harryPotter.pages;

// Testing Movie class
console.log('\n👇👇👇 Testing Movie Class');
const inception = new Movie('Inception', 2010, 'Sci-Fi', 'Christopher Nolan', '2h 28min');
inception.title;
inception.releaseDate;
inception.genre;
inception.director;
inception.duration;

// Testing Music class
console.log('\n👇👇👇 Testing Music Class');
const bohemianRhapsody = new Music('Bohemian Rhapsody', 1975, 'Rock', 'Queen', '5:55');
bohemianRhapsody.title;
bohemianRhapsody.releaseDate;
bohemianRhapsody.genre;
bohemianRhapsody.singer;
bohemianRhapsody.songDuration;

// Testing inheritance
console.log('\n👇👇👇 Testing Inheritance');
console.log(harryPotter instanceof Media); // Should print: true
console.log(inception instanceof Media); // Should print: true
console.log(bohemianRhapsody instanceof Media); // Should print: true

// Testing encapsulation
console.log('\n👇👇👇 Testing Encapsulation');
console.log(harryPotter._title); // Direct access to private property
console.log(harryPotter.title); // Access through getter method